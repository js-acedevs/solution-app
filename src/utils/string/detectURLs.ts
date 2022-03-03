/**
 *
 * *Detect URLs in string text
 * @param {string} text
 */

export const detectURLs = (text: string): RegExpMatchArray | null => {
    const urlRegex = /(\b(https?):\/\/[\w!#%&+,./:;=?@|~-]*[\w#%&+/=@|~-])/gi;
    return text.match(urlRegex);
};
