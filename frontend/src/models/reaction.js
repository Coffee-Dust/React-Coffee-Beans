import AjaxCall from "../helpers/ajax"
import Paths from "../helpers/path"

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
    this.reactableType = parent.constructorName
    this.currentUser = currentUser
  }

  submitClick(successCallback) {
    const postableData = {
      reaction_type: this.type,
      reactable_id: this.reactableID,
      reactable_type: this.reactableType,
      user_id: this.currentUser.id
    }
    new AjaxCall(Paths.reactions).postData(postableData).then(newReactionsCount=> successCallback(newReactionsCount))
  }

}

export default Reaction;