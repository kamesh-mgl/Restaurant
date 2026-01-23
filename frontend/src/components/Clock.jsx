import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // ⏱ start an interval to update time every second
   
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 🧹 cleanup: clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // empty dependency array → run only once

  return (
    <div className="clock-time" style={{ color:"white", textAlign: "center", fontSize: "2rem" }}>
      ⏰ {time}
    </div>
  );
}

export default Clock;
