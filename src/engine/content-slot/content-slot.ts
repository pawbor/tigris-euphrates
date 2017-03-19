export interface Content {
  contentType: string;
}

export interface ContentSlot {
  slotType: string;
  content: ReadonlyArray<Content>;
  contains(contentType: string): boolean;
  getContent(contentType: string): Content[];
};

export const Errors = {
  contentNotFound: 'content-slot.content-not-found'
};

export function createContentSlot(
  slotType: string,
  content: Content[]
): ContentSlot {
  return Object.freeze({
    slotType,
    content: Object.freeze(content.slice()),
    contains(contentType: string): boolean {
      const matchFn = getMatchPredicate(contentType);
      return content.some(matchFn);
    },
    getContent(contentType: string): Content[] {
      const matchFn = getMatchPredicate(contentType);
      return content.filter(matchFn);
    }
  });
}

function getMatchPredicate(contentType: string) {
  return (content: Content) => content.contentType === contentType;
}
