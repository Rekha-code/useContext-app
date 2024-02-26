import { useGlobalContext } from "./components/usecontext/userContext";

const Child = () => {
  const userData = useGlobalContext();
  return (
    <>
      <div>
        My name is {userData.name} and my age is {userData.age} and i m in{" "}
        {userData.city}
      </div>
    </>
  );
};
export default Child;
