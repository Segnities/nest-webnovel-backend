enum NovelStatus {
  ONGOING,
  COMPLETED,
  HIATUS,
  CANCELLED,
}

enum NovelFormat {
  LIGHT_NOVEL,
  WEB_NOVEL,
}

enum NovelTranslationStatus {
  NOT_TRANSLATED,
  PARTIALLY_TRANSLATED,
  FULLY_TRANSLATED,
  MACHINE_TRANSLATED,
  ONGOING,
}

export { NovelFormat, NovelStatus, NovelTranslationStatus };
