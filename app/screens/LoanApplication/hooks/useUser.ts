import { useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState<Object>({});
  const [redrictionObject, setRedirectionObject] = useState({})
  const BASE_URL = "http://13.126.195.188:11001"

  const createUser = async (payload, mobileNumber) => {
    try {
      const result = await fetch(`${BASE_URL}/ember-app/api/user-service/user-management/user`, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      })

      const { redirectionUrl, base64 } = result?.data || {}

      if (redirectionUrl && base64) {
        setRedirectionObject({
          redirectionUrl,
          base64,
        })
      }

      fetchUser({ mobileNumber })
    } catch (err) {
      console.error(err)
    }
  }

  const fetchUser = (payload) => {
      fetch(`${BASE_URL}/ember-app/api/user-service/user-management/fetch`, {
        method: "POST",
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then(response => response.json()).then((res) => {
        if(res?.data?.redirectionUrl && res?.data?.base64) {
          setRedirectionObject({
            redirectionUrl: res?.data?.redirectionUrl,
            base64: res?.data?.base64,
          })
        }
         return setUser(res?.data);
      }).catch((err) => console.error(err))
  }

  return {
    fetchUser,
    createUser,
    user,
    redrictionObject
  }
}
