class Reaction {

  static get typeGlyphs() {
    return {
      "like": "👍",
      "dislike": "👎",
      "love": "💜",
      "laugh": "🤣",
      "angry": "😡",
      "sad": "😢"
    }
  }

  constructor(type, parent, currentUser) {
    this.type = type
    this.glyph = this.constructor.typeGlyphs[type]
    this.reactableID = parent.id
    this.reactableType = parent.constructor.name
    this.currentUser = currentUser
  }

}

export default Reaction;