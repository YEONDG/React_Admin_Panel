import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTVfMTE5%2FMDAxNjUyNTQ1ODQxOTMz.ZbkDSWEwyRgYbbEke3kqcG3b53ljpnMc7Lwxtic5-nYg.Ug-4BKttM3_yN5FjLwj24zUwaylQ7545Zd3L4eni6GMg.PNG.cdyeon11%2F2022-05-15.png&type=a340"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">pororo</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">pororo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">010-1234-5678</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValuey">서울 어딘가</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValuey">KOREA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
