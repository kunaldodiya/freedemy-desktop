export const getVolumePath = course => {
  const data = course.url.split("/");
  const index = data.length - 2;
  return course.course_id + " - " + data[index];
};

export const file_url = "http://192.168.2.200:8080";