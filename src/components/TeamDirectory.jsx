import React from "react";
import { Card } from "./Card";

export const TeamDirectory = (props) => {
  const { searchText } = props;
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((res) => res.json())
      .then((res) => setUserData(res));
  }, []);

  const getUserTypeText = (value) => {
    if (value === "admin") {
      return "Administrators";
    }
    return "Members";
  };
  return (
    <>
      {[
        ...new Set(
          userData
            ?.filter((user) => {
              return searchText === ""
                ? user
                : user.first_name.toLowerCase().startsWith(searchText.toLowerCase()) ||
                    user.last_name.toLowerCase().startsWith(searchText.toLowerCase());
            })
            ?.map((item) => item.role)
        ),
      ]
        ?.sort()
        ?.map((item) => {
          return (
            <div key={item}>
              <h2 className="px-5 py-4 text-secondary">{getUserTypeText(item)}</h2>
              <div className="row row-cols-2 row-cols-lg-4 g-4 px-5 py-1">
                {userData
                  ?.filter((user) => {
                    return searchText === ""
                      ? user
                      : user.first_name.toLowerCase().startsWith(searchText.toLowerCase()) ||
                          user.last_name.toLowerCase().startsWith(searchText.toLowerCase());
                  })
                  ?.filter((user) => user.role === item)
                  ?.map((user) => {
                    return <Card key={user.first_name} data={user} />;
                  })}
              </div>
              <div className="mt-5 ms-5 me-5 divider"></div>
            </div>
          );
        })}
    </>
  );
};