import { TypeResolver } from "./TypeResolvers";


const KontentDelivery = require("@kentico/kontent-delivery");

export default class Globals {
static PROJECT_ID: string = "615577b9-4e2b-0074-b4f8-20f11d30f5ae";

  static SECURE_API_KEY: string =
    "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjE5YjlkNjllZGMwZTQyN2U5NjNmZDlhNTE1MzRmODlhIiwNCiAgImlhdCI6ICIxNjI2MzMyMDY0IiwNCiAgImV4cCI6ICIxOTcxOTMyMDY0IiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogIjYxNTU3N2I5NGUyYjAwNzRiNGY4MjBmMTFkMzBmNWFlIiwNCiAgImF1ZCI6ICJkZWxpdmVyLmtlbnRpY29jbG91ZC5jb20iDQp9.QFwPat7Wia81kJxmckCHhS9vcJLg6T5mPdHxFUnlr18";


    static KontentClient: any = new KontentDelivery.DeliveryClient({
        projectId: Globals.PROJECT_ID,
        globalQueryConfig: {
            useSecuredMode: true, // Queries the Delivery API using secure access.
        },
        secureApiKey: Globals.SECURE_API_KEY,
        typeResolvers: TypeResolver,

    });

    static SITE_NAME = "AIM";
    static CURRENT_LANG_CODENAME: string = "default";

    static BASE_URL_AIM_Website: string = "http://localhost:4000";


    static API_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://payment.aimcongress.com/api/"
      // : "http://localhost:1048/api/";
      : "https://payment.aimcongress.com/api/";

      static NETWORK_URL: string =
      process.env.NODE_ENV === "production"
        ? "https://payment.aimcongress.com/Payment/Payment/"
        : "http://localhost:1048/Payment/Payment/";

    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://aimcongress.com/"
            : "http://localhost:4000/";
}