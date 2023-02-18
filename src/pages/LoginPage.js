import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { selectIsLoading, selectError } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { SingIn } from "components/SingIn/SingIn";

const LogIn = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        {isLoading && !error && <Loader isLoading={isLoading} />}
        <SingIn />
      </div>
    );
  }

  export default LogIn;