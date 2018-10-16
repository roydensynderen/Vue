export const calculatedLengthMixin = {
    computed: {
        calculatedLength() {
          return this.secondText + ' (' + this.secondText.length + ')';
        }
    }
}