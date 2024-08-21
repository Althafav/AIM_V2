const KontentDelivery = require("@kentico/kontent-delivery");
import { Blogitems } from "@/models/blogitems";
import { Blogs } from "@/models/blogs";
import { Postshowreport } from "@/models/postshowreport";
import { Postshowreportyear } from "@/models/postshowreportyear";
import { Reportitem } from "@/models/reportitem";







export const TypeResolver = [
  // new KontentDelivery.TypeResolver("Menu", (rawData: any) => new Menu()),



  new KontentDelivery.TypeResolver("Blogs", (rawData: any) => new Blogs()),
  new KontentDelivery.TypeResolver("Blogitems", (rawData: any) => new Blogitems()),
  new KontentDelivery.TypeResolver("Postshowreport", (rawData: any) => new Postshowreport()),
  new KontentDelivery.TypeResolver("Postshowreportyear", (rawData: any) => new Postshowreportyear()),

  new KontentDelivery.TypeResolver("Reportitem", (rawData: any) => new Reportitem()),






];
