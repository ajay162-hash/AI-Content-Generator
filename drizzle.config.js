/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:SHJEzbn8O1oc@ep-old-recipe-a53hr5y9.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
  }
};