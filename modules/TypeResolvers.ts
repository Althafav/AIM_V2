const KontentDelivery = require("@kentico/kontent-delivery");
import { Blogitems } from "@/models/blogitems";
import { Blogs } from "@/models/blogs";







export const TypeResolver = [
  // new KontentDelivery.TypeResolver("Menu", (rawData: any) => new Menu()),



  new KontentDelivery.TypeResolver("Blogs", (rawData: any) => new Blogs()),
  new KontentDelivery.TypeResolver("Blogitems", (rawData: any) => new Blogitems()),






];
