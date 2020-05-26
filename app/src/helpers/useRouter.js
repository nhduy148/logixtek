import { useState, useEffect } from "react";

const useRouter = (data) => {
  const [router, setRouter] = useState({key: "home", props: {}});
  // console.log(router);
  
  useEffect(() => {
    if(data.key !== router.key) {
      setRouter(data)
    }
    
    
  }, [data])

  console.log(router);
  
  return {router, setRouter};
}

export default useRouter;