import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";
import { Helmet } from "react-helmet";

import { Loader } from "components/Loader/Loader";
import { RegisterForm } from "components/SingUp/SingUp";

export const Registration = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        {isLoading && !error && <Loader isLoading={isLoading} />}
        <RegisterForm />
      </div>
    );
  }