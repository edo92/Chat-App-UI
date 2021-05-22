class Helpers {
  static Uppercase(string) {
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
