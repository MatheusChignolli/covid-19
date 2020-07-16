export function TextAbstract(text: string, length: number) {
    if (text == null) {
        return "";
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
    var last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
}