//  Peta BaseMap
var mbAttrOPNVKarte = 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mbUrlOPNVKarte = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png';
var mbAttrOpenTopoMap = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	mbUrlOpenTopoMap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
var mbAttrOpenStreetMap_France =  '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mbUrlOpenStreetMap_France = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
var mbAttrCartoDB_Positron = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	mbUrlCartoDB_Positron = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
var mbAttrStadiaOutdoors = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mbUrlStadiaOutdoors = 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}';
var mbAttrEsri_WorldTopoMap =  'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
   mbUrlEsri_WorldTopoMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
var mbAttrThunderforestOpenCycleMap = '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   mbUrlThunderforestOpenCycleMap = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b';
var mbAttrEsri_WorldImagery = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
   mburlEsri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

//Settingan Ukuran Peta Basemap
var OPNVKarte = L.tileLayer(mbUrlOPNVKarte, {maxZoom: 18, attribution: mbAttrOPNVKarte})
var OpenTopoMap = L.tileLayer(mbUrlOpenTopoMap, {maxZoom: 17, attribution: mbAttrOpenTopoMap})
var OpenStreetMap_France = L.tileLayer(mbUrlOpenStreetMap_France, {maxZoom: 20, attribution: mbAttrOpenStreetMap_France})
var CartoDB_Positron = L.tileLayer(mbUrlCartoDB_Positron, {maxZoom: 20, attribution: mbAttrCartoDB_Positron})
var StadiaOutdoors = L.tileLayer(mbUrlStadiaOutdoors, {maxZoom: 20, minZoom: 0, attribution: mbAttrStadiaOutdoors, ext: 'png'})
var Esri_WorldTopoMap = L.tileLayer( mbUrlEsri_WorldTopoMap,{maxZoom: 18, attribution: mbAttrEsri_WorldTopoMap}),
ThunderforestOpenCycleMap = L.tileLayer(mbUrlThunderforestOpenCycleMap, {maxZoom: 22, attribution: mbAttrThunderforestOpenCycleMap}),
 Esri_WorldImagery = L.tileLayer(mburlEsri_WorldImagery, {maxZoom: 17, attribution: mbAttrEsri_WorldImagery}); 

//  <!-- Area Halaman Web Auto Panning adalah kota Cirebon -->
var southWest = L.latLng(-6.918266376910631, 108.38899181665165),
    northEast = L.latLng(-6.573997491289228, 108.6890503755984),
    bounds = L.latLngBounds(southWest, northEast);



//   <!-- Titik tengah Halaman Web adalah Terminal Harjamukti Cirebon -->
var map = L.map('map', {
 maxBounds: bounds,
 center: [-6.727873, 108.55505],
 zoom: 13,
 maxZoom: 22,
 minZoom: 10,
 layers: [Esri_WorldTopoMap]
 });

 // <!-- Utara Peta / Utara Geografis -->
var comp = new L.Control.Compass ({autoActive: false, showDigit:false});  
map.addControl(comp);
// scale bar botton left
var options=null;
var scale = L.control.betterscale({metric: true, imperial: false}).addTo(map);


 //  <!-- Minimap -->
 var ThunderForestOpenCycleMap2 = new L.TileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b',{
   minZoom: 0, 
   maxZoom: 13, 
   attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
); 
var MiniMap = new L.Control.MiniMap(ThunderForestOpenCycleMap2, 
{ 
   toggleDisplay: true,
   minimized: false
}).addTo(map);


 // Mouse di klik Keluar koordinat
var popup = L.popup(); 
function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("Lokasi Klik -> " + e.latlng.toString())
.openOn(map);
}
map.on('click', onMapClick);

// Measure Plugin Button 
var ctlMeasure = L.control.polylineMeasure({
	position: "topleft",
	measureConrolTitle: "Ukur Panjang",
	showClearControl: true,
	showUnitControl: true
}).addTo(map);





// <=========Batas Awal Custommarker =================================================================================================================================================>

// <!-- Lokasi Kota Cirebon-->
// Marker Data Section
var custommarker = L.layerGroup();
var Icon1 = L.icon({
   iconUrl:'kiara.png',
   iconSize: [30, 30],
   iconAnchor: [15, 30],
   popupAnchor: [0, -30]
   });
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
    popupstmik.setLatLng([-6.709651973395679, 108.55922764982452]);
    popupstmik.setContent('<p><img src="kraton.jpg" width="100" height="100" style="vertical-align:middle"/> <b>Alun-Alun Kejaksan, Kota Cirebon </b> Disini!</p>');
var marker = L.marker([-6.709651973395679, 108.55922764982452], {icon:Icon1}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// ======================== Batas Custommarker 1 Taman Buktit Kraton kasepuhan=====================================================================================================================================
var Icon2 = L.icon({
      iconUrl: 'ikonstadion.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var   popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.731418530274071, 108.53441901844973]);
      popupstmik.setContent('<p><img src="stadionBima.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Stadion Bima </b> Disini!</p>');
var marker = L.marker([-6.731418530274071, 108.53441901844973], {icon:Icon2}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// =========================Batas Custommarker 2 Stadion Bima==========================================================================================================================================================
var Icon3 = L.icon({
	   iconUrl: 'balaikotacirebon.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
	   popupstmik.setLatLng([-6.717879178472182, 108.57100056782551]);
	   popupstmik.setContent('<p><img src="bunderan.png" width="135" height="135" style="vertical-align:middle"/> <b>Bundaran Pelabuhan Cirebon</b> Disini!</p>');
var marker = L.marker([-6.717879178472182, 108.57100056782551], {icon:Icon3}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// =============================Batas Custommarker 3 Balai Kota cirebon================================================================================================================================================================================   
var Icon4 = L.icon({
      iconUrl: 'rsudgunungjaticirebon.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
  
var popupstmik = new L.Popup({maxWidth : 155, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([ -6.718320995500875,108.5495093739745]);
      popupstmik.setContent('<p><img src="csb.jpg" width="155" height="155" style="vertical-align:middle"/> <b>csb mall</b> Disini!</p>');
var marker = L.marker([-6.718320995500875,108.5495093739745], {icon:Icon4}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// ===============================Batas Custommerker 4 RSUD Gunungjati Cirebon=======================================================================================================================================================================================================================
var Icon5 = L.icon({
      iconUrl:'icon.png',
      iconSize: [30,30],
      iconAnchor: [15,30],
      popupAnchor: [0,-30]});
var popupmasjid = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popupmasjid.setLatLng([-6.715770010213305,108.5650545032857]);
      popupmasjid.setContent('<p><img src="sd.jpg" width="135" height="135" style="vertical-align:middle"/> <b>SD Al-Irsyad Al-Islamiyyah </b> Disini!</p>');
var marker = L.marker([-6.715770010213305,108.5650545032857], {icon:Icon5}).addTo(custommarker).bindPopup(popupmasjid).closePopup();
// ================================Batas Custommerker 5 Alun-Alun Kraton Kanoman Cirebon==================================================================================================================================================================================================================================
var Icon6 = L.icon({
	   iconUrl: 'kiara.png',
   	iconSize: [30, 30],
	   iconAnchor: [15, 30],
   	popupAnchor: [0, -30]});
	
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.736456903564296, 108.54330591054944]);
      popupstmik.setContent('<p><img src="tamangua.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Taman Gua Suyaranggi</b> Disini!</p>');
var marker = L.marker([-6.736456903564296, 108.54330591054944], {icon:Icon6}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// ====================================Batas Custommerker 6 Taman Gua Sunyaranggi====================================================================================================================================================================================================================================================================================
var Icon7 = L.icon({
      iconUrl: 'pesawat.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popupstmik.setLatLng([-6.758169944856143, 108.54007789108408]);
      popupstmik.setContent('<p><img src="bandara.png" width="135" height="135" style="vertical-align:middle"/> <b> Bandara Udara Cakrabhuana </b> <br/> Disini!</p>');
var marker = L.marker([-6.758169944856143, 108.54007789108408], {icon:Icon7}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// =====================================Batas Custommerker 7 Bandara Udara Cakrabhuana================================================================================================================================================================================================================
var Icon8 = L.icon({
	   iconUrl: 'kolam.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});	
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popupstmik.setLatLng([-6.717360033550051, 108.57381939517505]);
		popupstmik.setContent('<p><img src="waterland.jpg" width="130" height="150" style="vertical-align:middle"/></p><p><b>Waterlnd Ade Irma Suryani </b> Disini! </p>');
var marker = L.marker([-6.717360033550051, 108.57381939517505], {icon:Icon8}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// ======================================Batas Custommerker 8 Waterlnd Ade Irma Suryani=============================================================================================================================================================================================
var Icon9 = L.icon({
	   iconUrl: 'mall.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popupstmik.setLatLng([-6.740508635643064, 108.57040395117446]);
	   popupstmik.setContent('<p><img src="mall.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Grade Cty Mall Cirebon</b> Disini!</p>');
var marker = L.marker([-6.740508635643064, 108.57040395117446], {icon:Icon9}).addTo(custommarker).bindPopup(popupstmik).closePopup();
// <================Batas Akhir CastomMarker=========================================================================================================================================================>
// <================Batas Awal Circle (Lingkaran)==============================================================================================================================================================================>
// Circle Data Section 
var circle = L.layerGroup();
var circle1 = L.circle(
   [-6.709651973395679, 108.55922764982452],
{
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 80
}).addTo(circle).bindPopup("<b>Alun-Alun Kejaksan, Kota Cirebon</b><br/>Disini!").closePopup();
// ====================Batas Circle Taman Bukit Kraton===========================================================================================================================================================================
var circle2 = L.circle(
   [-6.731209420466184,108.53450647701406],
{
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 160
}).addTo(circle).bindPopup("<b>Stadion Bima</b><br/>Disini!").closePopup();
// =====================Batas Circle Stadion Bima=============================================================================================================================================================================================================
var circle3 = L.circle(
   [-6.717879178472182, 108.57100056782551],
{
   color: '#800000',
   fillcolor: '00FFFF',
   fillOpacity: 0.3,
   weight : 2,
   stroke : true,
   radius : 30
}).addTo(circle).bindPopup("<b>Bunderan</b><br/>Disini!").closePopup();
// <=====================Batas Akhir Circle====================================================================================================================================================================================================>
// <=================Batas Data Awal Rectangle (Kotak)================================================================================================================================================================================>
 // Rectangle Data Section
 var rectangle = L.layerGroup();
 var rectangle1 =[
   [ -6.717627808384037,108.55034151380988],
   [-6.719103804277935,108.5487720339458]];
   L.rectangle(rectangle1,{
   color: '#FD1C03', 
   fillColor: '#F433FF', 
   fillopacity: 0.3, 
   weight: 2, 
 }).addTo(rectangle).bindPopup("<b>CSB MALL</b><br/>Disini!").closePopup();
//  ============== Batas rectangle 1 rsud gunung jati=====================================================================================
 var rectangle2 =[
   [
      -6.715494965761309,
      108.56486067829991
   ],
   [
      -6.715936065710125,
      108.56526465157731
   ]];
	L.rectangle(rectangle2, {
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(rectangle).bindPopup("<b>sd</b><br />Disini!").closePopup();
// ==================Batas rectangle 2 kraton kanoman==================================================================================
var rectangle3 =[
   [
      -6.73524054339056,
      108.54459234813999
   ], 
   [
      -6.737580441614497,
      108.54265888428063
   ]];
	L.rectangle(rectangle3, {
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(rectangle).bindPopup("<b>Taman Gua Sayaragi</b><br />Disini!").closePopup();
// <===================Batas akhir Rectangle ====================================================================================================================================

// <==================Batas Data Awal Polygon===============================================================================================================================================================================================================>
// Polygon Data Section
var polygon = L.layerGroup();
var polygon1 = L.polygon([
   [-6.76272207098701,108.53466580531773],
   [-6.7603831484754835,108.53643209769353],
   [-6.760873836154545,108.5370022401923],
   [-6.761402268481774,108.53707825919264],
   [-6.761892955126058,108.53776243019195],
   [-6.762383641272109,108.5376484016914],
   [-6.762534621524438,108.53867465819036],
   [-6.762345896201396,108.53924480068912],
   [-6.761590994173304,108.54110726618609],
   [-6.760156677070569,108.54072717118629],
   [-6.759062063786672,108.54175342768525],
   [-6.758042938846529,108.54152537068614],
   [-6.756570865695295,108.54198148468436],
   [-6.755551735504895,108.54072717118629],
   [-6.751852652327642,108.54388195968153],
   [-6.751059987967864,108.54289371268476],
   [-6.754069784260594,108.54051884621254],
   [-6.753935094853404,108.54021529189856],
   [-6.7548073684476435,108.53947901121956],
   [-6.755102261935079,108.53966471835872],
   [-6.762113044161737,108.533643649429],
   [-6.76272207098701,108.53466580531773]], 
{
	color: "#306754", 
	fillColor: '#FF5F1F',
	fillOpacity: 0.3,
	weight: 2
}).addTo(polygon).bindPopup("<b>Bandara Udara Cakrabhuana</b><br/> Disini!").closePopup();
// ==================Batas Polygon 1 Bandara udara cakrabhuana=================================================================================
var polygon2 = L.polygon ([
   [-6.71717923627736,108.57284021669062],
   [-6.718099138315978,108.5728265952036],
   [-6.718789063703255,108.57313988940433],
   [-6.71857261662835,108.57360301996135],
   [-6.718789063703255,108.57388907118798],
   [-6.718477921003625,108.57433858025792],
   [-6.718193834015892,108.57489706122277],
   [-6.718004442599039,108.57545554218905],
   [-6.716949260495937,108.57525121988323],
   [-6.716868092548026,108.57455652404929],
   [-6.716976316475993,108.57345318360376],
   [-6.71717923627736,108.57284021669062]],
{
   color: '#FD1C03', 
   fillColor: '#F433FF',
   fillOpacity: 0.2,
   weight: 2
}).addTo(polygon).bindPopup("<b>Cirebon Waterland Ade Irma Suryani</b><br />Disini!").closePopup();
// ====================Batas Polygon 2 Cirebon Weterland ade irma suryani======================================================================================================================
var polygon3 = L.polygon ([
   [-6.7417574264169815,108.57094631001576],
   [-6.740842900789758,108.5710297521266],
   [-6.740779265689568,108.57098253672007],
   [-6.7406553446802775,108.5709892817784],
   [-6.740618503292168,108.57104324224315],
   [-6.740330470532882,108.57107022247624],
   [-6.7396941184780275,108.5705845782831],
   [-6.739620435555622,108.56988646475634],
   [-6.740139565004014,108.56984262187825],
   [-6.740159660326455,108.56982575923189],
   [-6.740491054425931,108.56981717896167],
   [-6.7405468418083245,108.56988458977128],
   [-6.74066957402583,108.56987897220381],
   [-6.740730940123541,108.57049128705432],
   [-6.74136691558293,108.57044634651464],
   [-6.741445017775391,108.57035646543511],
   [-6.741735111520526,108.57033961273271],
   [-6.74174069024474,108.5706261086724],
   [-6.741735111520526,108.57071598975074],
   [-6.741763005140939,108.57078901812781],
   [-6.7417574264169815,108.57094631001576]],
{
   color: '#FD1C03', 
   fillColor: '#F433FF',
   fillOpacity: 0.3,
   weight: 2
}).addTo(polygon).bindPopup("<b>Grade Cty Mall</b><br />Disini!").closePopup();
// <==================Batas Akhir Data Polygon============================================================================================================================================>
// <==================Batas Data Awal Polyline=============================================================================================================================================>
// Polyline Data Section	
var polyline = L.layerGroup();
var polyline1 = L.polyline([
   [-6.717428684300401,108.5732376088742],
   [-6.718000015148945,108.57147067615631],
   [-6.719237896354201,108.57178571067226],
   [-6.723892769068257,108.57320718227805],
   [-6.724067530768451,108.57397706014052],
   [-6.7251160996493695,108.5747469380052],
   [-6.726426807569069,108.57516487170346],
   [-6.728199327976171,108.57580575824562],
   [-6.729124012871779,108.57687652111667],
   [-6.73202706791831,108.57791890882515],
   [-6.738732953204064,108.58190684142727],
   [-6.739126189828212,108.5817599484634],
   [-6.742760501137681,108.57306567945847],
   [-6.7427637834249765,108.5711664019654],
   [-6.7406524772161305,108.5713120188529]],
{
   color: "#800080",
   weight: 5
}).addTo(polyline).bindPopup("<b> Jln. Kab. Pasaman</b><br />Kabupaten Pasaman").closePopup();
// =======================Batas Polyline 1 =============================================================================================
var polyline2 = L.polyline ([
   [-6.742633403294917,
      108.57036796595497
    ],
    [-6.741421202783201,108.5577195946683],
    [-6.739592446274088,108.54799655384488],
    [-6.740339551290219,108.54752258665786],
    [-6.741039428830646,108.54677756619225],
    [-6.74185928409365,108.54516671113299],
    [-6.744482002179737,108.5433785060855],
    [-6.754574820612945,108.5383582261598],
    [-6.755948848425419,108.53774927807598],
    [-6.756249451306871,108.53785825183456]],
{
    color: '#808000',
    weight: 5
}).addTo(polyline).bindPopup("<b> Area Taman Lalu Lintas</b><br />Disini!").closePopup();



// <=============Batas Akhir Polyline=============================================================================================================================================>


// <==============layer ====================================================================================================================================================================>
   // <!-- Layer yang mengandung element yang dicari -->
   

  //  <!-- Zoom Level PLugin -->>
  new L.Control.ZoomPanel({
   labels : [
      {
         zoom: 2,
         label: "X2"
      },
      {
         zoom: 6,
         label: "X6"
      },
      {
         zoom: 10,
         label: "X10"
      },
      {
         zoom: 12,
         label: "X12"
      },
      {
         zoom: 16,
         label: "X16"
      },
      {
         zoom: 18,
         label: "X18"
      }
   ]
}).addTo(map);
 //Layer yang akan di-load ke Peta WEBGIS
 var baseLayers = {
   "Esri World Topo Map " : Esri_WorldTopoMap,
   "Open Karte" : OPNVKarte,
   "Open Topo Map" : OpenTopoMap,
   "Open Street Map France" : OpenStreetMap_France,
   "Stadia Outdoors" : StadiaOutdoors,
   "Carto DB Positron" : CartoDB_Positron,
   "Thunderforest OpenCycleMap" : ThunderforestOpenCycleMap,
   "Esri World Imagery" : Esri_WorldImagery 
   };
   
   var overlay = {
      "marker" : custommarker,
      "circle" : circle,
      "rectangle" : rectangle,
      "polygon"   : polygon,
      "polyline"  : polyline
   }
   // <!-- Layer Control Peta WEBGIS -->
   L.control.layers(baseLayers, overlay,{
    position: 'topleft',
    collapsed: false 
   }).addTo(map);

   var data = [
      {"loc":[-6.709651973395679, 108.55922764982452], "title":"Alun-Alun Kejaksan, Kota Cirebon "},
      {"loc":[-6.731418530274071, 108.53441901844973], "title":"Stadion Bima"},
      {"loc":[-6.717879178472182, 108.57100056782551], "title":"Bundaran Pelabuhan Cirebon"},
      {"loc":[-6.718320995500875,108.5495093739745], "title":"csb mall"},
      {"loc":[-6.715770010213305,108.5650545032857], "title":"SD Al-Irsyad Al-Islamiyyah"},
      {"loc":[-6.758169944856143, 108.54007789108408], "title":"Bandara Udara Cakrabhuana"},
      {"loc":[-6.736456903564296, 108.54330591054944], "title":"Taman Gua Suyaranggi"},
      {"loc":[-6.717360033550051, 108.57381939517505], "title":"Waterlnd Ade Irma Suryani"},
      {"loc":[-6.740508635643064, 108.57040395117446], "title":"Grade Cty Mall Cirebon"}
   ];
   
   // <!-- Layer yang mengandung element yang dicari -->
   var markersLayer = new L.LayerGroup();
   map.addLayer(markersLayer);
   var controlSearch = new L.Control.Search({
   position:'topleft',
   layer: markersLayer,
   initial: false,
   zoom: 17,
   marker: false
   });
   
   map.addControl( controlSearch );
   // <!-- Populasikan peta dengan marker dari data pencaharian -->
   for(i in data) {
   var title = data[i].title, //value searched
   loc = data[i].loc, //position found
   marker = new L.circle(new L.latLng(loc), {
   title: title,
   fillOpacity: 0,
   weight: 0,
   radius: 1
   });
   marker.bindPopup('title: '+ title );
   markersLayer.addLayer(marker);
   }

   
  