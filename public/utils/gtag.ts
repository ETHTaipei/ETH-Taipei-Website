const gtagReportConversion = (url?: Location | (string & Location)) => {
  const callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-11115939885/LQmeCJrflpMYEK2Qv7Qp",
    event_callback: callback,
  });
  return false;
};

export default gtagReportConversion;
