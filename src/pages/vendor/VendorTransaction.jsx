import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ReactPaginate from 'react-paginate';
import axios from 'axios'

import AwaitingApproval from "../../assets/images/svg/awaiting-approval.svg";
import Completed from "../../assets/images/svg/completed.svg";
import Cancelled from "../../assets/images/svg/cancelled.svg";
import Ongoing from "../../assets/images/svg/on-going.svg";
import CancelledTab from "../../assets/images/svg/cancelled-tab.svg";
import CompletedTab from "../../assets/images/svg/completed-tab.svg";
import TransactionType from "../../components/TransactionType/TransactionType";
import { fetchTransactions } from "../../services/transactions";
import SideBar from "../../components/SideBar/SideBar";
// import './VendorTransaction.css'
import {VendorTransactionItems} from './VendorTransactionItems'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const VendorTransaction = (props) => {
  const {data} = props;
  const [activeTab, setActiveTab] = useState("All Transactions");

  const transactionTabChangeHandler = (transactionTabName) => {
    setActiveTab(transactionTabName);
  };

  const handleSelect = () => {
    setSelect(!select);
    setSelect2(false);
    setSelect3(false);
    setSelect4(false);
  }

  const [select, setSelect] = useState(true);

  const handleSelect2 = () => {
    setSelect2(!select2);
    setSelect(false);
    setSelect3(false);
    setSelect4(false);
  }
  const [select2, setSelect2] = useState(false);

  const handleSelect3 = () => {
    setSelect3(!select3);
    setSelect(false);
    setSelect2(false);
    setSelect4(false);
  }

  const [select3, setSelect3] = useState(false);

  const handleSelect4 = () => {
    setSelect4(!select4);
    setSelect(false);
    setSelect2(false);
    setSelect3(false);
  }

  const [select4, setSelect4] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log(await fetchTransactions());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const listItemsClassName =
    "font-semibold cursor-pointer transition-all duration-200 delay-150 hover:mb-[translate-y-1] text-colorPrimary mr-[13.5vw] 2xl:mr-[100px]";

    const [transactions, setTransactionst] = useState(0);
    const [loading, setLoading] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [transactionsPerPage, setTransactionsPerPage] = useState(0);

    

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      const res =await axios.get('https://jsonplaceholder.typicode.com/posts')
      setTransactionsPerPage(res.data)
      setLoading(false)
    }
    fetchTransactions();
  }, []);
  console.log(transactions)
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(VendorTransactionItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(VendorTransactionItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % VendorTransactionItems.length;
    setItemOffset(newOffset);
  };

  /* return (
   
  ); */

  return (
    <Layout>

      
       {/*  <div className="w-[75vw] 2xl:w-[1506px] bg-white rounded-[25px] ml-[31.5px] 2xl:ml-[42px] mr-[66.75px] 2xl:mr-[89px] pb-9 px-[39.75px] 2xl:px-[53px] pt-[50px]"> */}
          {/* <h2 className="text-3xl font-semibold text-colorPrimary mb-[50px]">
            Transactions
          </h2>
          <ul className="flex mb-5">
            {transactionTypes.map((transactionType) => (
              <li
                onClick={() => transactionTabChangeHandler(transactionType.name)}
                className={`${listItemsClassName} ${activeTab === transactionType.name &&
                  "border-b-colorSecondary  border-b-2"
                  }`}
                key={transactionType.name}
              >
                <a className="flex items-">
                  {transactionType.icon && (
                    <img
                      src={transactionType.icon}
                      alt={transactionType.name}
                      className="mr-[10px]"
                    />
                  )}
                  {transactionType.name}
                </a>
              </li>
            ))}
          </ul> */}
          {/* TRANSACTION TYPE */}
          {/* {activeTab === "All Transactions" ? (
            <TransactionType transactions={transactions} />
          ) : activeTab === "Out-going" ? (
            <TransactionType transactions={transactions} />
          ) : activeTab === "Completed" ? (
            <TransactionType transactions={transactions} />
          ) : (
            activeTab === "Cancelled" && (
              <TransactionType transactions={transactions} />
            )
          )} */} 
      <div className='transactions-card-cover'>
        <div className='transactions-card'>
          <div className="Transactions">
            <div className="heading">
              <h4>Transaction</h4>
            </div>
            <div className="Category">
              {select ? (<h6 className="Selection active" >All Transaction</h6>
              ) : <h6 className="Selection" onClick={handleSelect}>All Transaction</h6>}
              {select2 ? <h6 className="Selection active" >Out-going</h6> : <h6 className="Selection" onClick={handleSelect2}>Out-going</h6>}
              {select3 ? <h6 className="Selection active">Cancelled</h6> : <h6 className="Selection" onClick={handleSelect3}>Cancelled</h6>}
              {select4 ? <h6 className="Selection active" >Completed</h6> : <h6 className="Selection" onClick={handleSelect4}>Completed</h6>}

            </div>

            {VendorTransactionItems.map((item, index) => {
              return (
                <div className={select ? "Transaction1 border" : 'hide'}>

                  <div className="Transaction-body">
                    <div className="Transaction-body-profile pushDown3">
                      <img className='TransactionStatusimg pushDown1' src={item.satusImg} alt="Scam Trust" />
                      <div>
                        <h5 className="Transaction-details1">{item.itemName}</h5>
                        <p className="Transaction-description">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.businessName}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.amount}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.date}</h5>
                  </div>
                  <div className="Transaction-details2 pushDown">
                    <h5><FontAwesomeIcon icon={faEllipsis} /></h5>
                  </div>
                </div>

              )
            }
            )}
            <>
              {/* <Items currentItems={currentItems} /> */}
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </>


            {VendorTransactionItems.filter((item) => {
              return item.status === 'outgoing'
            }).map((item, index) => {
              return (
                <div className={select2 ? "Transaction1 border" : 'hide'}>

                  <div className="Transaction-body">
                    <div className="Transaction-body-profile pushDown3">
                      <img className='TransactionStatusimg pushDown1' src={item.satusImg} alt="Scam Trust" />
                      <div>
                        <h5 className="Transaction-details1">{item.itemName}</h5>
                        <p className="Transaction-description">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.businessName}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.amount}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.date}</h5>
                  </div>
                  <div className="Transaction-details2 pushDown">
                    <h5><FontAwesomeIcon icon={faEllipsis} /></h5>
                  </div>
                </div>

              )
            }
            )}

            {VendorTransactionItems.filter((item) => {
              return item.status === 'canclled'
            }).map((item, index) => {
              return (
                <div className={select3 ? "Transaction1 border" : 'hide'}>

                  <div className="Transaction-body">
                    <div className="Transaction-body-profile pushDown3">
                      <img className='TransactionStatusimg pushDown1' src={item.satusImg} alt="Scam Trust" />
                      <div>
                        <h5 className="Transaction-details1">{item.itemName}</h5>
                        <p className="Transaction-description">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.businessName}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.amount}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.date}</h5>
                  </div>
                  <div className="Transaction-details2 pushDown">
                    <h5><FontAwesomeIcon icon={faEllipsis} /></h5>
                  </div>
                </div>

              )
            }
            )}

            {VendorTransactionItems.filter((item) => {
              return item.status === 'completed'
            }).map((item, index) => {
              return (
                <div className={select4 ? "Transaction1 border" : 'hide'}>

                  <div className="Transaction-body">
                    <div className="Transaction-body-profile pushDown3">
                      <img className='TransactionStatusimg pushDown1' src={item.satusImg} alt="Scam Trust" />
                      <div>
                        <h5 className="Transaction-details1">{item.itemName}</h5>
                        <p className="Transaction-description">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.businessName}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown">
                    <h5>{item.amount}</h5>
                  </div>
                  <div className="Transaction-details1 pushDown1">
                    <h5>{item.date}</h5>
                  </div>
                  <div className="Transaction-details2 pushDown">
                    <h5><FontAwesomeIcon icon={faEllipsis} /></h5>
                  </div>
                </div>

              )
            }
            )}
          </div>
          pagination
        </div>
      </div>
     {/*    </div> */}
     
    </Layout>
  );
};

export default VendorTransaction;

const transactionTypes = [
  { name: "All Transactions" },
  { name: "Out-going" },
  { name: "Completed", icon: CompletedTab },
  { name: "Cancelled", icon: CancelledTab },
];
const transactions = [
  {
    id: 0,
    icon: AwaitingApproval,
    transactionItem: "Iphone 11...",
    transactionStatus: "Awaiting approval",
    buyer: "Ilerioluwa Brown",
    amount: "250,000.00",
    date: "25th May, 2022",
  },
  {
    id: 1,
    icon: Completed,
    transactionItem: "Airpod pro...",
    transactionStatus: "Completed",
    buyer: "Ilerioluwa Brown",
    amount: "250,000.00",
    date: "25th May, 2022",
  },
  {
    id: 2,
    icon: Cancelled,
    transactionItem: "Iphone 11...",
    transactionStatus: "Cancelled",
    buyer: "Ilerioluwa Brown",
    amount: "250,000.00",
    date: "25th May, 2022",
  },
  {
    id: 3,
    icon: Ongoing,
    transactionItem: "On-going",
    transactionStatus: "Awaiting approval",
    buyer: "Ilerioluwa Brown",
    amount: "250,000.00",
    date: "25th May, 2022",
  },
];
