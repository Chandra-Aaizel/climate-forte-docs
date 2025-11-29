import {
  ChartNoAxesCombined ,
  Map,
  History,
  BarChart3,
  Bell,
  Route,
  CalendarRange,
  MapPin,
} from "lucide-react";

import { SiJavascript, SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { OperationCard } from "../types/operation";
import { WeatherCard } from "../types/weather";
import { Endpoints } from "../types/endpoints";
import { RecipeCard } from "../types/recipe";



export const operations: OperationCard[] = [
  {
    title: "Plan your operations",
    description:
      "Use weather forecasts to view the future and how the weather will impact your operation, infrastructure, and service areas.",
    image: "/images/img1.svg",
  },
  {
    title: "Validate & research historical data",
    description:
      "Analyze past events for trends and patterns in order to optimize future operations, validate weather impact, and how your business performance was affected.",
    image: "/images/img2.svg",
  },
  {
    title: "Make better decisions through insights",
    description:
      "Set rules and thresholds over weather data to gain business insights and focus on what matters the most when making decisions.",
    image: "/images/img3.svg",
  },
  {
    title: "Bring weather data to life with custom visualizations",
    description:
      "Visualize weather data on your app and website to provide a highly accurate, custom view of weather conditions.",
    image: "/images/img4.svg",
  },
  {
    title: "Prepare for the next weather event",
    description:
      "Generate proactive alerts for weather events before they happen to better prepare and mitigate risks around unique conditions, hazards, and more.",
    image: "/images/img5.svg",
  },
  {
    title: "Fly, drive, and sail safely",
    description:
      "Know what to expect along navigation routes to avoid shipping delays and increase the safety of your team, customers, and cargo.",
    image: "/images/img6.svg",
  },
];

export const weatherCards: WeatherCard[] = [
  {
    title: "Air quality",
    description:
      "Understand what precautions to take with respect to pollution, meet EPA standard regulations, and plan your outdoor activity.",
  },
  {
    title: "Fire",
    description:
      "Estimate fire danger. Know when and where fire or smoke could impact operations or communities to help increase safety for staff members and local residents.",
  },
  {
    title: "Core",
    description:
      "See all types of weather core data like precipitation, temperature and other Core Weather data layers.",
  },
  {
    title: "Maritime",
    description:
      "Safe sailing routes and avoid coastal operation risks.",
  },
  {
    title: "Flood",
    description:
      "Determine threat of flooding and impact to infrastructure further in advance.",
  },
  {
    title: "Lightning",
    description:
      "Keep people safe from lightning strikes, plan departures, and avoid energy outages.",
  },
  {
    title: "Soil",
    description:
      "Moisture and temperature soil data to help plan agriculture water consumption and railroads risks.",
  },
  {
    title: "Solar",
    description:
      "Optimize solar energy generation from irradiation, and avoid crop loss.",
  },
  {
    title: "Pollen",
    description:
      "Blending a mixture of statistical and physical/chemical modeling. Estimate areas where plants are germinating and producing pollen that may be lofted into the air.",
  },
];


export const endpoints: Endpoints[] = [
  {
    title: "Timeline",
    description:
      "Tomorrow.io Timeline API provides weather data at scale. From 7 days in the past to 14 days in the future, with up to 1 minute time resolution for any point, polygon, and polyline in the world.",
    icon: ChartNoAxesCombined ,
  },
  {
    title: "Map",
    description:
      "Build a complete weather experience for car dashboards, mobile, and web applications. Our Map API can be integrated with MapBox, Google Maps, Leaflets, openLayers, and more.",
    icon: Map,
  },
  {
    title: "Historical",
    description:
      "Explore historical weather observations since 2000 with up to 10,000 square KM polygon and 2,000 KM polyline.",
    icon: History,
  },
  {
    title: "Insights",
    description:
      "Customize weather data using temporal and spatial thresholds to get a clear view of the data you care about the most.",
    icon: BarChart3,
  },
  {
    title: "Alerts",
    description:
      "Customize weather data using temporal and spatial thresholds to get a clear view of the data you care about the most.",
    icon: Bell,
  },
  {
    title: "Notifications",
    description:
      "Get visibility into which notifications have been received and acknowledged.",
    icon: Bell,
  },
  {
    title: "Route",
    description:
      "Build navigational applications by simply specifying the routes legs and the duration of each leg.",
    icon: Route,
  },
  {
    title: "Events",
    description:
      "Integrate severe weather events and custom insights into your application.",
    icon: CalendarRange,
  },
  {
    title: "Locations",
    description:
      "Manage assets at scale with predefined locations.",
    icon: MapPin,
  },
];

export const recipeCards: RecipeCard[] = [
  {
    title: "Build Your Own Weather App With One Call",
    description:
      "Climatic forecast of >80 data points up to 15 days out and 6 hours back, all within a single API call.",
    icon: {
        component: FaNodeJs,
        color: "#22C55E",
    },
    tags: ["TIMELINE"],
  },
  {
    title: "Visualize global precipitation on a map",
    description:
      "Take viewers on a virtual journey with precipitation data 6 hours out and up to 6 hours back.",
    icon: {
        component: SiJavascript,
        color: "#F7DF1E",
    },
    tags: ["MAP"],
  },
  {
    title: "Set up severe weather alerts around a geofence",
    description:
      "Get government agencies' weather warnings pushed to your webhook endpoint as soon as they are published.",
    icon: {
        component: FaNodeJs,
        color: "#22C55E",
    },
    tags: ["ALERTS", "LOCATIONS"],
  },
  {
    title: "[Aviation] - Use historical weather data for post ops analytics",
    description:
      "Use the Historical API to build a retrospection tool and explore how weather events affected your aviation operations in the past.",
    icon: {
        component: SiPython,
        color: "#3776AB",
    },
    tags: ["HISTORICAL"],
  },
  {
    title:
      "[Logistics] - Optimize operations to meet SLAs with historical weather insights",
    description:
      "Leverage the historical API to explore how weather events impacted your delivery schedules and operations.",
    icon: {
        component: SiJavascript,
        color: "#F7DF1E",
    },
    tags: ["HISTORICAL"],
  },
  {
    title:
      "[Energy] - Build your outage retrospection tool using historical weather data",
    description:
      "Use the Historical API to build a retrospection tool that can help you explore how weather events have historically impacted outages.",
    icon: {
        component: SiPython,
        color: "#3776AB"
    },
    tags: ["HISTORICAL"],
  },
];



