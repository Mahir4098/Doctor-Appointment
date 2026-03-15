const getStoredAppoint = () => {
  const storedAppoint = localStorage.getItem("appointList");
  return storedAppoint ? JSON.parse(storedAppoint) : [];
};

const addToDb = (id) => {
  const appointData = getStoredAppoint();
  const exists = appointData.some((item) => Number(item) === Number(id));

  if (exists) {
    // অ্যালার্ট না দিয়ে false রিটার্ন করুন
    return false; 
  }

  appointData.push(id);
  localStorage.setItem("appointList", JSON.stringify(appointData));
  return true; // সাকসেস হলে true রিটার্ন করুন
};

const removeStoredAppoint = (id) => {
  const appointData = getStoredAppoint();

  const remaining = appointData.filter(
    (item) => Number(item) !== Number(id)
  );

  localStorage.setItem("appointList", JSON.stringify(remaining));
};

export { addToDb, getStoredAppoint, removeStoredAppoint };