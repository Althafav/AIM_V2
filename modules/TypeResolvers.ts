const KontentDelivery = require("@kentico/kontent-delivery");
import { Basiccontentpage } from "@/models/basiccontentpage";
import { Blogitems } from "@/models/blogitems";
import { Blogs } from "@/models/blogs";
import { Postshowreport } from "@/models/postshowreport";
import { Postshowreportyear } from "@/models/postshowreportyear";
import { Pressrelaseitem } from "@/models/pressrelaseitem";
import { Pressrelease } from "@/models/pressrelease";
import { Reportitem } from "@/models/reportitem";
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











];
