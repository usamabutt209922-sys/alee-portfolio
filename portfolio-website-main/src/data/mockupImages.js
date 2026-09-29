import agviewer from '../../Mockups/AGviewer.webp'
import alertica from '../../Mockups/alertica.webp'
import armourHomes from '../../Mockups/Armour Homes.webp'
import bling from '../../Mockups/Bling Web Mobile ECommerce.webp'
import bluesquare from '../../Mockups/Bluesquare.webp'
import bluefauceit from '../../Mockups/BlueFaucet Dashboard.webp'
import carequest from '../../Mockups/CareQuest.webp'
import ceastaAssurance from '../../Mockups/Ceasta Assurance Website.webp'
import chinasoko from '../../Mockups/Chinasoko.webp'
import containerFlow from '../../Mockups/Container Flow Web App.webp'
import dunesBeachResort from '../../Mockups/Dunes Beach Resort.webp'
import educationLogistics from '../../Mockups/Education Logistics Dashboard.webp'
import epadel from '../../Mockups/ePadel App v1.0.webp'
import fashshop from '../../Mockups/Fash Shop.webp'
import fituraX from '../../Mockups/Fitura X App.webp'
import habino from '../../Mockups/Habino.webp'
import hannaHealth from '../../Mockups/Hanna Health.webp'
import hiburit from '../../Mockups/Hiburit.webp'
import kaduu from '../../Mockups/KADDU.webp'
import kashypay from '../../Mockups/KashyPay.webp'
import kenaFinanceCard from '../../Mockups/Kena Finance 1.webp'
import kenaFinanceDetail from '../../Mockups/Kena Finance 2.webp'
import majlix from '../../Mockups/Majlix.webp'
import lahebo from '../../Mockups/Lahebo.webp'
import leta from '../../Mockups/LETA Website Logistics.webp'
import lunavoy from '../../Mockups/Lunavoy.webp'
import myleRcm from '../../Mockups/MYLE RCM Dashboard Insurance.webp'
import nailahHill from '../../Mockups/Nailah Hill.webp'
import oncomply from '../../Mockups/OnComply.webp'
import olyra from '../../Mockups/Olyra WebApp Health Monitoring.webp'
import onlygenius from '../../Mockups/OnlyGenius.webp'
import propertyWholesaler from '../../Mockups/Property Wholesaler.webp'
import polkat from '../../Mockups/POLKAT Ecommerce Construction Tools.webp'
import quickDeal from '../../Mockups/Quick Deal.webp'
import rally from '../../Mockups/Rally Mobile App Sports.webp'
import revsport from '../../Mockups/RevSport.webp'
import riderush from '../../Mockups/RideRush.webp'
import shoppe from '../../Mockups/Shoppe.webp'
import shweerCompliance from '../../Mockups/SHWEER Compliance Client Management System.webp'
import slotDemos from '../../Mockups/Slot Demos.webp'
import singular from '../../Mockups/Singular Villas Website.webp'
import sohcahtoa from '../../Mockups/Sohcahtoa.webp'
import sorsx from '../../Mockups/SorsX Website.webp'
import studiflats from '../../Mockups/StudiFlats.webp'
import suter from '../../Mockups/Suter.webp'
import techsaraSolutions from '../../Mockups/Techsara Solutions.webp'
import thrivecare from '../../Mockups/Thrivecare.webp'
import trillionRealEstate from '../../Mockups/Trillion Real Estate.webp'
import tourismApp from '../../Mockups/Tourism App.webp'
import weplan from '../../Mockups/weplan.ai.webp'
import wizzyTales from '../../Mockups/Wizzy Tales.webp'
import writewise from '../../Mockups/WriteWise.webp'
import zeeinvoices from '../../Mockups/ZeeInvoices.webp'

// Project slugs are the stable join between the data layer and image assets.
// A project can provide a separate detail image when more than one mockup exists.
const mockupImages = {
  agviewer: { card: agviewer },
  alertica: { card: alertica },
  'armour-homes': { card: armourHomes },
  bling: { card: bling },
  'bluesquare-strategy': { card: bluesquare },
  bluefauceit: { card: bluefauceit },
  carequest: { card: carequest },
  'ceasta-assurace': { card: ceastaAssurance },
  chinasoko: { card: chinasoko },
  'container-flow': { card: containerFlow },
  'dunes-beach-resort': { card: dunesBeachResort },
  'education-logistics-dashboard': { card: educationLogistics },
  epadel: { card: epadel },
  fashshop: { card: fashshop },
  fituraX: { card: fituraX },
  'habino-real-estate': { card: habino },
  'hanna-health': { card: hannaHealth },
  hiburit: { card: hiburit },
  kaduu: { card: kaduu },
  kashypay: { card: kashypay },
  'kena-finance': { card: kenaFinanceCard, detail: kenaFinanceDetail },
  lahebo: { card: lahebo },
  leta: { card: leta },
  lunavoy: { card: lunavoy },
  majlix: { card: majlix },
  'myle-rcm': { card: myleRcm },
  'nailah-hill': { card: nailahHill },
  oncomply: { card: oncomply },
  olyra: { card: olyra },
  onlygenius: { card: onlygenius },
  polkat: { card: polkat },
  'property-wholesaler': { card: propertyWholesaler },
  'quick-deal': { card: quickDeal },
  rally: { card: rally },
  revsport: { card: revsport },
  riderush: { card: riderush },
  shoppe: { card: shoppe },
  'shweer-compliance': { card: shweerCompliance },
  singular: { card: singular },
  'slot-demos': { card: slotDemos },
  sohcahtoa: { card: sohcahtoa },
  sorsx: { card: sorsx },
  studiflats: { card: studiflats },
  suter: { card: suter },
  'techsara-solutions': { card: techsaraSolutions },
  thrivecare: { card: thrivecare },
  'tourism-app': { card: tourismApp },
  'trillion-real-estate': { card: trillionRealEstate },
  weplan: { card: weplan },
  'wizzy-tales': { card: wizzyTales },
  writewise: { card: writewise },
  zeeinvoices: { card: zeeinvoices },
}

export function getMockupImage(slug, variant = 'card') {
  const images = mockupImages[slug]
  return images?.[variant] || images?.card || ''
}
