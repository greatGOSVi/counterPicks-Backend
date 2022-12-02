const createTimeStamp = () => {
  const timestamp = new Date();
  const date = `${timestamp.getDate()}/${
    timestamp.getMonth() + 1
  }/${timestamp.getFullYear()}`;
  const hour = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;

  console.log(
    '-------------------------------- API --------------------------------'
  );
  console.log(`Timestamp: { ${date} | ${hour} }`);
};

module.exports = createTimeStamp;
