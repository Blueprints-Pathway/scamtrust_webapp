import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";

import AwaitingApproval from "../assets/images/svg/awaiting-approval.svg";
import Completed from "../assets/images/svg/completed.svg";
import Cancelled from "../assets/images/svg/cancelled.svg";
import Ongoing from "../assets/images/svg/on-going.svg";
import CancelledTab from "../assets/images/svg/cancelled-tab.svg";
import CompletedTab from "../assets/images/svg/completed-tab.svg";
import TransactionType from "../components/TransactionType/TransactionType";
import { fetchTransactions } from "../services/transactions";

const VendorTransaction = () => {
  const [activeTab, setActiveTab] = useState("All Transactions");

  const transactionTabChangeHandler = (transactionTabName) => {
    setActiveTab(transactionTabName);
  };

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
    "font-semibold cursor-pointer transition-all duration-200 delay-150 hover:mb-[translate-y-1] text-colorPrimary mr-[75px] 2xl:mr-[100px]";

  return (
    <Layout>
      <div className="w-[1080.5px] 2xl:w-[1506px] bg-white rounded-[25px] ml-[31.5px] 2xl:ml-[42px] mr-[66.75px] 2xl:mr-[89px] pb-9 px-[39.75px] 2xl:px-[53px] pt-[50px]">
        <h2 className="text-3xl font-semibold text-colorPrimary mb-[50px]">
          Transactions
        </h2>
        <ul className="flex mb-5">
          {transactionTypes.map((transactionType) => (
            <li
              onClick={() => transactionTabChangeHandler(transactionType.name)}
              className={`${listItemsClassName} ${
                activeTab === transactionType.name &&
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
        </ul>
        {/* TRANSACTION TYPE */}
        {activeTab === "All Transactions" ? (
          <TransactionType transactions={transactions} />
        ) : activeTab === "Out-going" ? (
          <TransactionType transactions={transactions} />
        ) : activeTab === "Completed" ? (
          <TransactionType transactions={transactions} />
        ) : (
          activeTab === "Cancelled" && (
            <TransactionType transactions={transactions} />
          )
        )}
        pagination
      </div>
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
