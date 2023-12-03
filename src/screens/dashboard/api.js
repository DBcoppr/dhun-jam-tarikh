import axios from "axios";

export const updatePrice = async (updateBody) => {
  try {
    let id = JSON.parse(localStorage.getItem("adminData")).id;
    const response = await axios.put(
      `https://stg.dhunjam.in/account/admin/${id}`,
      updateBody
    );

    return response; // Return only the 'data' from the response
  } catch (error) {
    alert(error);
    // Optionally handle the error here or rethrow it
    throw error;
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
