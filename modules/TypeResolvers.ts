const KontentDelivery = require("@kentico/kontent-delivery");
import { Basiccontentpage } from "@/models/basiccontentpage";
import { Blogitems } from "@/models/blogitems";
import { Blogs } from "@/models/blogs";
import { Conferencedates } from "@/models/conferencedates";
import { Conferencepage } from "@/models/conferencepage";
import { EntrepreneurPortfolio } from "@/models/entrepreneur_portfolio";
import { Fdiawardpage } from "@/models/fdiawardpage";
import { Homepage } from "@/models/homepage";
import { Investmentdestinationpagefdi } from "@/models/investmentdestinationpagefdi";
import { Partnerspageitem } from "@/models/partnerspageitem";
import { Portfoliopage } from "@/models/portfoliopage";
import { Postshowreport } from "@/models/postshowreport";
import { Postshowreportyear } from "@/models/postshowreportyear";
import { Pressrelaseitem } from "@/models/pressrelaseitem";
import { Pressrelease } from "@/models/pressrelease";
import { Reportitem } from "@/models/reportitem";
import { Sessionspeaker } from "@/models/sessionspeaker";
import { Speaker } from "@/models/speaker";
import { Sponsorspage } from "@/models/sponsorspage";







export const TypeResolver = [
  // new KontentDelivery.TypeResolver("Menu", (rawData: any) => new Menu()),



  new KontentDelivery.TypeResolver("Blogs", (rawData: any) => new Blogs()),
  new KontentDelivery.TypeResolver("Blogitems", (rawData: any) => new Blogitems()),
  new KontentDelivery.TypeResolver("Postshowreport", (rawData: any) => new Postshowreport()),
  new KontentDelivery.TypeResolver("Postshowreportyear", (rawData: any) => new Postshowreportyear()),

  new KontentDelivery.TypeResolver("Reportitem", (rawData: any) => new Reportitem()),
  new KontentDelivery.TypeResolver("Speaker", (rawData: any) => new Speaker()),
  new KontentDelivery.TypeResolver("Sponsorspage", (rawData: any) => new Sponsorspage()),
  new KontentDelivery.TypeResolver("Pressrelease", (rawData: any) => new Pressrelease()),
  new KontentDelivery.TypeResolver("Pressrelaseitem", (rawData: any) => new Pressrelaseitem()),
  new KontentDelivery.TypeResolver("Basiccontentpage", (rawData: any) => new Basiccontentpage()),

  new KontentDelivery.TypeResolver("Portfoliopage", (rawData: any) => new Portfoliopage()),
  new KontentDelivery.TypeResolver("Conferencepage", (rawData: any) => new Conferencepage()),
  new KontentDelivery.TypeResolver("Conferencedates", (rawData: any) => new Conferencedates()),

  new KontentDelivery.TypeResolver("Sessionspeaker", (rawData: any) => new Sessionspeaker()),


  new KontentDelivery.TypeResolver("Partnerspageitem", (rawData: any) => new Partnerspageitem()),

  new KontentDelivery.TypeResolver("Fdiawardpage", (rawData: any) => new Fdiawardpage()),

  new KontentDelivery.TypeResolver("Investmentdestinationpagefdi", (rawData: any) => new Investmentdestinationpagefdi()),
  new KontentDelivery.TypeResolver("HomePage", (rawData: any) => new Homepage()),
  new KontentDelivery.TypeResolver("EntrepreneurPortfolio", (rawData: any) => new EntrepreneurPortfolio()),











];
