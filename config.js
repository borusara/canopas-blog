export default Object.freeze({
  STRAPI_URL: "https://blog-admin.canopas.com",
  CANOPAS_URL: "https://canopas.com",
  HOST_URL:
    typeof window !== "undefined"
      ? window.location.protocol + "//" + window.location.host
      : "",

  WORDS_PER_MINUTE: 200,

  // status codes
  SUCCESS: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,

  POST_NOT_FOUND_MESSAGE: `Stay tuned, we have some exciting posts in the works that we'll be sharing with you shortly.`,
  SEO_META_DATA: {
    title: "Canopas blogs",
    description:
      "Canopas blogs will help you to become a better software developer. We are sharing knowledge on Web, Backend, iOS, Android, and Flutter development",
    authorName: "canopas",
  },
});
