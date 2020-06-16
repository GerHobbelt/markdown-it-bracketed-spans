
module.exports = function bracketed_spans_plugin(md) {

  function span(state) {
    let max = state.posMax;

    if (state.src.charCodeAt(state.pos) !== 0x5B) {
      // opening [
      return false;
    }

    let labelStart = state.pos + 1;
    let labelEnd   = state.md.helpers.parseLinkLabel(state, state.pos, true);

    if (labelEnd < 0) {
      // parser failed to find closing ]
      return false;
    }

    let pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x7B /* { */) {
      // probably found span

      state.pos = labelStart;
      state.posMax = labelEnd;

      state.push('span_open', 'span', 1);
      state.md.inline.tokenize(state);
      state.push('span_close', 'span', -1);

      state.pos = pos;
      state.posMax = max;
      return true;
    }
    return false;

  }

  md.inline.ruler.push('bracketed-spans', span);
};
