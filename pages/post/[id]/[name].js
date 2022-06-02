import { useRouter } from "next/dist/client/router";

function PageDinamic(){
  const router = useRouter();
  const { id, name } = router.query;

  return(
    <>
        <h1>Dinamic page: {name}</h1>
    </>
  )
}
export default PageDinamic;