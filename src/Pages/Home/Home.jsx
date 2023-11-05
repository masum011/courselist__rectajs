import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "./homeSlice";
import './homestyle.css';
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  return (
    <div>
      <Layout>
        <div className="p-4 overflow-x-scroll">
          <h2>Course List</h2>
          <div className="course--div">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.id}
                className="course--card"
                onClick={() =>
                  navigate("./detalis", { state: { userId: item.id } })}>
                <img src={item?.thumbnail} className="course--img" alt="url" />
                <p>{item?.name}</p>
                <p>{item?.description}</p>
                <p>{item?.duration}</p>
              </div>
            ))
            ) : (
              <div className="error-message">
              loading...
            </div>
          )}
          </div>
          <section></section>
        </div>
      </Layout>
    </div>
  );
}
