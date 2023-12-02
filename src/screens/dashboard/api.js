import axios from "axios";

export const updatePrice = async (adminId, updateBody) => {
  try {
    const response = await axios.put(
      `https://stg.dhunjam.in/account/admin/${adminId}`,
      updateBody
    );
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const handleLogin = async (url, requestBody) => {
  try {
    const response = await axios.post(url, requestBody);

    if (response.data && response.data.data && response.data.data.id) {
      try {
        const adminDetailsResponse = await axios.get(
          `https://stg.dhunjam.in/account/admin/${response.data.data.id}`
        );
        return adminDetailsResponse.data;
      } catch (error) {
        alert(error);
      }
    }
  } catch (error) {
    alert(error);
  }
};
