function queryStringFromParams(params: { [key: string]: any }) {
  const arr = [];
  for (const k in params) {
    const val = encodeURIComponent(params[k]);
    arr.push(`${k}=${val}`);
  }
  return arr.join("&");
}

const PI = Math.PI;
// 长半轴
const SMA = 6378245.0;
// 地球偏率
const EOB = 0.00669342162296594323;
/**
 * 判断是否在国内，不在国内不做偏移
 *
 * @param lng
 * @param lat
 * @return
 */
function outOfChina(lng: number, lat: number) {
  if (lng < 72.004 || lng > 137.8347) {
    return true;
  } else if (lat < 0.8293 || lat > 55.8271) {
    return true;
  }
  return false;
}

/**
 * 纬度转换
 *
 * @param lng
 * @param lat
 * @return
 */
function transformLat(lng: number, lat: number) {
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0;
  return ret;
}

/**
 * 经度转换
 *
 * @param lng
 * @param lat
 * @return
 */
function transformLng(lng: number, lat: number) {
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0;
  return ret;
}
/**
 * WGS84转GCJ02(火星坐标系)
 *
 * @param lng WGS84坐标系的经度
 * @param lat WGS84坐标系的纬度
 * @return 火星坐标数组
 */
function wgs84ToGCJ02(lng: number, lat: number): [number, number] {
  if (outOfChina(lng, lat)) {
    return [lng, lat];
  }
  let dlat = transformLat(lng - 105.0, lat - 35.0);
  let dlng = transformLng(lng - 105.0, lat - 35.0);
  const radlat = (lat / 180.0) * PI;
  let magic = Math.sin(radlat);
  magic = 1 - EOB * magic * magic;
  const sqrtmagic = Math.sqrt(magic);
  dlat = (dlat * 180.0) / (((SMA * (1 - EOB)) / (magic * sqrtmagic)) * PI);
  dlng = (dlng * 180.0) / ((SMA / sqrtmagic) * Math.cos(radlat) * PI);
  const mglat = lat + dlat;
  const mglng = lng + dlng;
  return [mglng, mglat];
}
/**
 * 高德地图 移动web页面导航
 * @param start  {lnglat:[lng, lat], city: string, name:string}  起始点
 * @param target [lnglat:[lng, lat], city: string, name:string]  终点
 * @param coordinate {string} 坐标系，默认 WGS84
 */
export function aMapNavigate(
  start: { lnglat: [number, number]; city: string; name: string },
  target: { lnglat: [number, number]; city: string; name: string },
  coordinate: string
) {
  const uri = "https://uri.amap.com/navigation";
  let startLngLat = start.lnglat;
  let targetLnglat = target.lnglat;
  coordinate = coordinate || "wgs84";
  if (coordinate === "wgs84") {
    if (startLngLat[0] && startLngLat[1]) {
      startLngLat = wgs84ToGCJ02(startLngLat[0], startLngLat[1]);
    } else {
      startLngLat = [0, 0];
    }
    targetLnglat = wgs84ToGCJ02(targetLnglat[0], targetLnglat[1]);
    coordinate = "gaode";
  }
  const params = {
    from: `${startLngLat.join(",")},${start.name || "起点"}`,
    to: `${targetLnglat.join(",")},${target.name || "终点"}`,
    coordinate: coordinate,
    mode: "car",
  };

  const queryString = queryStringFromParams(params);
  const url = `${uri}?${queryString}`;
  console.log("url:", url);
  location.href = url;
}

/**
 * 百度地图 移动web页面导航
 * @param start  {lnglat:[lng, lat], city: string, name:string}  起始点
 * @param target [lnglat:[lng, lat], city: string, name:string]  终点
 */
export function baiduNavigate(
  start: { lnglat: [number, number]; city: string; name: string },
  target: { lnglat: [number, number]; city: string; name: string },
  coordinate: string
) {
  const uri = "api.map.baidu.com/direction";
  const params = {
    origin: `name:${start.name || "起点"}|latlng:${start.lnglat.reverse().join(",")}`,
    destination: `name:${target.name || "终点"}|latlng:${target.lnglat.reverse().join(",")}`,
    mode: "driving",
    output: "html",
    origin_region: start.city,
    destination_region: target.city,
    coord_type: coordinate || "wgs84",
    src: "webapp.jczy.qiyu",
  };

  const queryString = queryStringFromParams(params);
  const url = `http://${uri}?${queryString}`;
  location.href = url;
}

/**
 * 腾讯 移动web页面导航
 * @param start  {lnglat:[lng, lat], city: string, name:string}  起始点
 * @param target [lng, lat]  终点
 */
export function tengxunNavigate(
  start: { lnglat: [number, number]; city: string; name: string },
  target: { lnglat: [number, number]; city: string; name: string }
) {
  // "https://map.qq.com/nav/drive#routes/page?transport=1&spointy=30.64242&spointx=104.04311&epointy=38&epointx=114.52&sword=成都市 武侯区&eword=石家庄土豆&cond=1&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU&ch=uri-api&start=104.04311,30.64242&dest=114.52,38"
  const url = `https://map.qq.com/nav/drive#routes/page?transport=1&spointy=${start.lnglat[0]}&spointx=${start.lnglat[1]}&epointy=${target.lnglat[0]}&epointx=${target.lnglat[1]}&sword=${start.name}&eword=${target.name}`
  location.href = url;
}
