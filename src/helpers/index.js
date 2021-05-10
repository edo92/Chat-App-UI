class Helpers {
  static firstChartUppercase(string) {
    return (
      string.charAt(0).toUpperCase() + string.slice(1)
    );
  }

  static promisify(action) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 150);
    });
  }
}

export default Helpers;
