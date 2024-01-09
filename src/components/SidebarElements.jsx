import React from "react";
import '../index.css';
function SidebarElements() {
  return (
    <div>
      <ul className=".sidebar-submenu-cont">
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-inactive-icon"
            >
              <g opacity="0.8">
                <path
                  d="M13.5518 15H10.454C10.1732 15 9.90374 14.8889 9.70454 14.6909C9.50533 14.4929 9.39254 14.2242 9.39081 13.9433V9.7298H6.58179V13.9433C6.58005 14.2242 6.46727 14.4929 6.26806 14.6909C6.06886 14.8889 5.79941 15 5.51856 15H2.42076C2.097 15 1.78649 14.8714 1.55756 14.6425C1.32863 14.4135 1.20001 14.103 1.20001 13.7793V6.39572C1.20027 6.20565 1.2449 6.01827 1.33036 5.84849C1.41581 5.67872 1.53973 5.53124 1.69225 5.41781L7.32342 1.24366C7.53461 1.08549 7.79136 1 8.05521 1C8.31906 1 8.57582 1.08549 8.787 1.24366L14.3066 5.41125C14.4532 5.52941 14.5709 5.67956 14.6505 5.8502C14.7301 6.02084 14.7696 6.20745 14.766 6.39572V13.7793C14.7669 13.9393 14.7361 14.0978 14.6755 14.2459C14.6149 14.394 14.5256 14.5286 14.4127 14.6421C14.2999 14.7555 14.1658 14.8455 14.018 14.907C13.8703 14.9684 13.7118 15 13.5518 15ZM10.5197 13.8843H13.565C13.5917 13.8826 13.6167 13.8708 13.635 13.8513C13.6533 13.8318 13.6635 13.806 13.6634 13.7793V6.39572C13.664 6.38035 13.6607 6.36508 13.6538 6.35132C13.6469 6.33756 13.6367 6.32575 13.624 6.31696L8.09131 2.14937C8.07289 2.13696 8.05118 2.13032 8.02896 2.13032C8.00675 2.13032 7.98503 2.13696 7.96661 2.14937L2.342 6.32353C2.32842 6.33338 2.31724 6.34617 2.30928 6.36094C2.30133 6.37571 2.29681 6.39209 2.29606 6.40885V13.7793C2.29606 13.8071 2.30712 13.8338 2.32682 13.8535C2.34651 13.8732 2.37322 13.8843 2.40107 13.8843H5.44636V9.61822C5.44809 9.35244 5.55443 9.09802 5.74238 8.91008C5.93032 8.72213 6.18474 8.61578 6.45052 8.61406H9.50239C9.63512 8.6132 9.76672 8.63849 9.88968 8.68848C10.0126 8.73848 10.1245 8.81221 10.219 8.90545C10.3135 8.9987 10.3886 9.10964 10.4402 9.23193C10.4918 9.35423 10.5188 9.48549 10.5197 9.61822V13.8843Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <p>Home</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-inactive-icon"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4376 1.58989C11.2893 0.957005 10.7245 0.5 10.0642 0.5H5.93576L5.83102 0.50393L5.72216 0.516339L5.6151 0.537137C4.98221 0.685402 4.52521 1.2503 4.52521 1.91055V2.08258H3.35548L3.23545 2.08574C2.16237 2.14235 1.29126 2.95316 1.29126 3.97478V13.6078L1.29481 13.7204C1.35842 14.7257 2.26836 15.5 3.35548 15.5H12.6445L12.7645 15.4969C13.8376 15.4402 14.7087 14.6294 14.7087 13.6078V3.97478L14.7051 3.86216C14.6415 2.8569 13.7316 2.08258 12.6445 2.08258H11.4748V1.91055L11.4708 1.80581L11.4584 1.69695L11.4376 1.58989ZM11.4748 3.11469V3.2867C11.4748 3.94695 11.0177 4.51185 10.3849 4.66011L10.2778 4.68091L10.1689 4.69332L10.0642 4.69725H5.93576C5.27551 4.69725 4.71061 4.24024 4.56234 3.60736L4.54155 3.50029L4.52914 3.39144L4.52521 3.2867V3.11469H3.35548C2.80708 3.11469 2.37671 3.46857 2.32797 3.89421L2.32337 3.97478V13.6078C2.32337 14.0413 2.72149 14.4207 3.2541 14.4638L3.35548 14.4679H12.6445C13.1929 14.4679 13.6232 14.114 13.672 13.6884L13.6766 13.6078V3.97478C13.6766 3.54129 13.2785 3.1619 12.7459 3.11877L12.6445 3.11469H11.4748ZM6.14196 1.29128H9.85799C10.2156 1.29128 10.5272 1.52067 10.6402 1.85491L10.6643 1.94058L10.6788 2.0289L10.6837 2.117L10.6832 3.09366L10.676 3.19145L10.659 3.28068L10.6295 3.37519C10.5425 3.6029 10.3586 3.77954 10.127 3.86008L10.038 3.88569L9.94496 3.90122L9.85799 3.90596L6.12858 3.90553L6.03079 3.89833L5.94156 3.88132L5.84705 3.85175C5.61934 3.76474 5.4427 3.58083 5.36216 3.34925L5.33655 3.26026L5.32102 3.16724L5.31628 3.08025L5.31671 2.10359L5.32391 2.0058L5.34092 1.91657L5.37049 1.82206C5.4575 1.59435 5.64141 1.41771 5.87299 1.33717L5.96198 1.31156L6.055 1.29603L6.14196 1.29128Z"
                  fill="white"
                ></path>
                <path
                  d="M4.37032 8.47675C4.7505 8.47675 5.0587 8.16856 5.0587 7.78838C5.0587 7.4082 4.7505 7.1 4.37032 7.1C3.99014 7.1 3.68195 7.4082 3.68195 7.78838C3.68195 8.16856 3.99014 8.47675 4.37032 8.47675Z"
                  fill="white"
                ></path>
                <path
                  d="M6.43548 7.1588C6.08986 7.1588 5.80968 7.43898 5.80968 7.7846C5.80968 8.13021 6.08986 8.41039 6.43548 8.41039H11.6922C12.0378 8.41039 12.318 8.13021 12.318 7.7846C12.318 7.43898 12.0378 7.1588 11.6922 7.1588H6.43548Z"
                  fill="white"
                ></path>
                <path
                  d="M5.80971 11.3217C5.80971 10.9761 6.08988 10.696 6.4355 10.696H11.6922C12.0378 10.696 12.318 10.9761 12.318 11.3217C12.318 11.6674 12.0378 11.9475 11.6922 11.9475H6.4355C6.08988 11.9475 5.80971 11.6674 5.80971 11.3217Z"
                  fill="white"
                ></path>
                <path
                  d="M4.37035 12.0139C4.75053 12.0139 5.05873 11.7057 5.05873 11.3255C5.05873 10.9453 4.75053 10.6371 4.37035 10.6371C3.99017 10.6371 3.68197 10.9453 3.68197 11.3255C3.68197 11.7057 3.99017 12.0139 4.37035 12.0139Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <p>Orders</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              class="nav-inactive-icon"
            >
              <path
                fill="#fff"
                d="M20.497 13c.829 0 1.5.672 1.5 1.5v6c0 .828-.671 1.5-1.5 1.5h-6c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h6zM9.5 13c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-6c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h6zm10.797 1.7h-5.6v5.6h5.6v-5.6zM9.3 14.7H3.7v5.6h5.6v-5.6zM9.5 2c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-6C2.672 11 2 10.328 2 9.5v-6C2 2.672 2.672 2 3.5 2h6zm10.997 0c.829 0 1.5.672 1.5 1.5v6c0 .828-.671 1.5-1.5 1.5h-6c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h6zM9.3 3.7H3.7v5.6h5.6V3.7zm10.997 0h-5.6v5.6h5.6V3.7z"
                opacity="0.8"
              ></path>
            </svg>
          </div>
          <p>Products</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-inactive-icon"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.72998 2.50001C0.72998 2.19626 0.976224 1.95001 1.27998 1.95001H10.4441C10.7479 1.95001 10.9941 2.19626 10.9941 2.50001V10.4423C10.9941 10.746 10.7479 10.9923 10.4441 10.9923H1.27998C0.976224 10.9923 0.72998 10.746 0.72998 10.4423V2.50001ZM1.82998 3.05001V9.89228H9.89414V3.05001H1.82998Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.89413 5.55476C9.89413 5.251 10.1404 5.00476 10.4441 5.00476H12.8879C13.0338 5.00476 13.1737 5.0627 13.2768 5.16585L15.1097 6.99868C15.2128 7.10182 15.2707 7.24172 15.2707 7.38759V10.4423C15.2707 10.7461 15.0245 10.9923 14.7207 10.9923L10.4441 10.9923C10.1404 10.9923 9.89413 10.7461 9.89413 10.4423V5.55476ZM10.9941 6.10476V9.89231H14.1707V7.6154L12.6601 6.10476H10.9941Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.02919 10.9923C3.48941 10.9923 3.05183 11.4299 3.05183 11.9696C3.05183 12.5094 3.48941 12.947 4.02919 12.947C4.56897 12.947 5.00655 12.5094 5.00655 11.9696C5.00655 11.4299 4.56897 10.9923 4.02919 10.9923ZM1.95183 11.9696C1.95183 10.8223 2.8819 9.89228 4.02919 9.89228C5.17649 9.89228 6.10655 10.8223 6.10655 11.9696C6.10655 13.1169 5.17649 14.047 4.02919 14.047C2.8819 14.047 1.95183 13.1169 1.95183 11.9696Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9715 10.9923C11.4317 10.9923 10.9941 11.4299 10.9941 11.9696C10.9941 12.5094 11.4317 12.947 11.9715 12.947C12.5113 12.947 12.9489 12.5094 12.9489 11.9696C12.9489 11.4299 12.5113 10.9923 11.9715 10.9923ZM9.89413 11.9696C9.89413 10.8223 10.8242 9.89228 11.9715 9.89228C13.1188 9.89228 14.0489 10.8223 14.0489 11.9696C14.0489 13.1169 13.1188 14.047 11.9715 14.047C10.8242 14.047 9.89413 13.1169 9.89413 11.9696Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <p>Delivery</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1074 0.290837C13.0654 -0.231661 14.2333 0.461666 14.2333 1.55281V14.4471C14.2333 15.5383 13.0653 16.2316 12.1074 15.7091L4.04696 11.3125H2.375C1.23591 11.3125 0.3125 10.3891 0.3125 9.24999V6.74999C0.3125 5.6109 1.23591 4.68749 2.375 4.68749H4.04692L12.1074 0.290837ZM12.6083 1.86866L5.06662 5.9823V10.0176L12.6083 14.1313V1.86866ZM1.9375 6.74999C1.9375 6.50836 2.13338 6.31249 2.375 6.31249H3.4375V9.68749H2.375C2.13338 9.68749 1.9375 9.49161 1.9375 9.24999V6.74999Z"
                  fill="white"
                />
                <path
                  d="M18.6387 3.32573C18.919 3.67613 18.8622 4.18743 18.5118 4.46775L16.4284 6.13442C16.078 6.41474 15.5667 6.35793 15.2864 6.00753C15.0061 5.65713 15.0629 5.14583 15.4133 4.86551L17.4966 3.19884C17.847 2.91852 18.3583 2.97533 18.6387 3.32573Z"
                  fill="white"
                />
                <path
                  d="M15.5041 8.02081C15.5041 7.57208 15.8679 7.20831 16.3166 7.20831H18.8583C19.307 7.20831 19.6708 7.57208 19.6708 8.02081C19.6708 8.46955 19.307 8.83331 18.8583 8.83331H16.3166C15.8679 8.83331 15.5041 8.46955 15.5041 8.02081Z"
                  fill="white"
                />
                <path
                  d="M16.4284 10.2822C16.078 10.0019 15.5667 10.0587 15.2864 10.4091C15.0061 10.7595 15.0629 11.2708 15.4133 11.5511L17.4966 13.2178C17.847 13.4981 18.3583 13.4413 18.6387 13.0909C18.919 12.7405 18.8622 12.2292 18.5118 11.9489L16.4284 10.2822Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <p>Marketing</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-inactive-icon"
            >
              <g opacity="0.8">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.66211 10.9375C2.66211 10.5095 3.00909 10.1625 3.43711 10.1625H7.81211C8.24013 10.1625 8.58711 10.5095 8.58711 10.9375C8.58711 11.3655 8.24013 11.7125 7.81211 11.7125H4.21211V16.5625C4.21211 16.9905 3.86513 17.3375 3.43711 17.3375C3.00909 17.3375 2.66211 16.9905 2.66211 16.5625V10.9375Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.41211 16.5625C1.41211 16.1345 1.75909 15.7875 2.18711 15.7875H17.8121C18.2401 15.7875 18.5871 16.1345 18.5871 16.5625C18.5871 16.9905 18.2401 17.3375 17.8121 17.3375H2.18711C1.75909 17.3375 1.41211 16.9905 1.41211 16.5625Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.03711 7.18748C7.03711 6.75946 7.38409 6.41248 7.81211 6.41248H12.1871C12.6151 6.41248 12.9621 6.75946 12.9621 7.18748C12.9621 7.6155 12.6151 7.96248 12.1871 7.96248H8.58711V16.5625C8.58711 16.9905 8.24013 17.3375 7.81211 17.3375C7.38409 17.3375 7.03711 16.9905 7.03711 16.5625V7.18748Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4121 3.43748C11.4121 3.00945 11.7591 2.66248 12.1871 2.66248H16.5621C16.9901 2.66248 17.3371 3.00945 17.3371 3.43748V16.5625C17.3371 16.9905 16.9901 17.3375 16.5621 17.3375H12.1871C11.7591 17.3375 11.4121 16.9905 11.4121 16.5625V3.43748ZM12.9621 4.21248V15.7875H15.7871V4.21248H12.9621Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <p>Analytics</p>
        </li>
        <li className="active-labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-active-icon"
            >
              <path
                d="M4.18182 5.6H14.8182C15.1677 5.6 15.4 5.86257 15.4 6.125V12.875C15.4 13.1374 15.1677 13.4 14.8182 13.4H4.18182C3.83229 13.4 3.6 13.1374 3.6 12.875V6.125C3.6 5.86257 3.83229 5.6 4.18182 5.6Z"
                fill="white"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.5 11.5C10.6046 11.5 11.5 10.6046 11.5 9.5C11.5 8.39543 10.6046 7.5 9.5 7.5C8.39543 7.5 7.5 8.39543 7.5 9.5C7.5 10.6046 8.39543 11.5 9.5 11.5Z"
                fill="#1A181E"
              ></path>
              <path
                d="M4 5.4C3.66863 5.4 3.4 5.66863 3.4 6V10.4H1.18182C0.762625 10.4 0.6 10.1309 0.6 10V3C0.6 2.86913 0.762626 2.6 1.18182 2.6H11.8182C12.2374 2.6 12.4 2.86913 12.4 3L12.4 5.4H4Z"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <p>Payouts</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M12.7625 6.16247C12.9091 6.2765 13.0073 6.44166 13.0375 6.62496C13.0642 6.80556 13.0194 6.98947 12.9125 7.13746L8.22498 13.3875C8.16002 13.4774 8.07423 13.5503 7.97496 13.5999C7.87393 13.6499 7.76268 13.6756 7.64999 13.675C7.49764 13.6734 7.34941 13.6254 7.22499 13.5375C7.14976 13.479 7.08614 13.4069 7.03746 13.3249C6.98424 13.2464 6.95003 13.1565 6.93748 13.0625C6.92497 12.9712 6.92497 12.8787 6.93748 12.7875C6.96642 12.6983 7.00856 12.6141 7.06249 12.5375L11.75 6.28747C11.807 6.21251 11.8784 6.14959 11.9599 6.10238C12.0415 6.05518 12.1316 6.02463 12.225 6.01247H12.3375C12.4922 6.0123 12.6422 6.06525 12.7625 6.16247Z"
                  fill="white"
                />
                <path
                  d="M11.7977 10.9404C11.965 10.8718 12.1442 10.8368 12.325 10.8375C12.5059 10.8368 12.6851 10.8718 12.8524 10.9404C13.0197 11.009 13.1718 11.11 13.3 11.2375C13.4915 11.4301 13.6217 11.6751 13.6742 11.9416C13.7266 12.2082 13.6989 12.4842 13.5946 12.735C13.4903 12.9858 13.3141 13.2001 13.0881 13.3509C12.8622 13.5016 12.5966 13.5821 12.325 13.5821C12.0534 13.5821 11.7879 13.5016 11.5619 13.3509C11.336 13.2001 11.1597 12.9858 11.0554 12.735C10.9511 12.4842 10.9234 12.2082 10.9759 11.9416C11.0283 11.6751 11.1585 11.4301 11.35 11.2375C11.4782 11.11 11.6304 11.009 11.7977 10.9404Z"
                  fill="white"
                />
                <path
                  d="M8.61256 8.50001C8.86905 8.24032 9.01287 7.89002 9.01287 7.52501C9.01287 7.16001 8.86905 6.80971 8.61256 6.55001C8.35286 6.29352 8.00256 6.1497 7.63756 6.1497C7.27255 6.1497 6.92225 6.29352 6.66256 6.55001C6.40397 6.8086 6.2587 7.15932 6.2587 7.52501C6.2587 7.89071 6.40397 8.24142 6.66256 8.50001C6.92115 8.7586 7.27186 8.90387 7.63756 8.90387C8.00325 8.90387 8.35397 8.7586 8.61256 8.50001Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4 10.2625L19.0875 11.7875C19.2286 12.0927 19.2971 12.4264 19.2875 12.7625C19.29 13.0899 19.2217 13.4139 19.0875 13.7125C18.9612 14.0033 18.7736 14.2634 18.5375 14.475C18.3002 14.6878 18.0244 14.8533 17.725 14.9625L16.1875 15.55C16.0605 15.5947 15.9452 15.6673 15.85 15.7625C15.7548 15.8577 15.6822 15.973 15.6375 16.1L15.05 17.6375C14.9382 17.9414 14.7636 18.2182 14.5375 18.45C14.312 18.687 14.0395 18.8743 13.7375 19C13.4404 19.1319 13.1188 19.2001 12.7937 19.2001C12.4686 19.2001 12.1471 19.1319 11.85 19L10.35 18.3375C10.2306 18.2738 10.0978 18.2395 9.9625 18.2375C9.82819 18.2352 9.69524 18.2651 9.57497 18.325L8.07499 19.0125C7.70015 19.1845 7.28645 19.2543 6.87592 19.2148C6.46538 19.1753 6.07263 19.0279 5.73749 18.7875C5.34063 18.5131 5.03568 18.1253 4.86248 17.675L4.28749 16.1375C4.24278 16.0105 4.17016 15.8952 4.07497 15.8C3.97979 15.7048 3.86446 15.6322 3.73749 15.5875L2.1875 15C1.88784 14.8971 1.61297 14.7328 1.3805 14.5176C1.14803 14.3023 0.963058 14.0409 0.837479 13.75C0.703235 13.4514 0.635011 13.1274 0.637474 12.8C0.635232 12.4767 0.703487 12.1567 0.837479 11.8625L1.525 10.3625C1.62511 10.1138 1.62511 9.83611 1.525 9.58748L0.837479 8.0875C0.70508 7.78782 0.6329 7.46502 0.625 7.13749C0.624989 6.81163 0.688676 6.4889 0.812492 6.18748C0.932122 5.8853 1.11544 5.61246 1.34998 5.3875C1.58372 5.16392 1.86002 4.98963 2.16248 4.87499L3.7125 4.3C3.83919 4.24885 3.95404 4.17224 4.04999 4.07497C4.14189 3.98198 4.21414 3.87149 4.26247 3.75L4.83749 2.19997C4.94604 1.89156 5.1259 1.61317 5.36247 1.38748C5.58795 1.15046 5.86045 0.963131 6.16249 0.837479C6.46077 0.709908 6.78183 0.64415 7.10625 0.64415C7.43066 0.64415 7.75168 0.709908 8.04996 0.837479L9.54998 1.525C9.79861 1.62511 10.0763 1.62511 10.325 1.525L11.825 0.837479C12.1208 0.706666 12.4392 0.634521 12.7625 0.625C13.0883 0.624989 13.4111 0.688676 13.7125 0.812492C14.0102 0.938645 14.2797 1.12306 14.5051 1.3549C14.7305 1.58675 14.9073 1.86131 15.025 2.16248L15.6125 3.7125C15.6608 3.83399 15.7331 3.94449 15.825 4.03748C15.9209 4.13474 16.0358 4.21131 16.1625 4.26247L17.7 4.83749C18.0003 4.93878 18.2769 5.10043 18.5125 5.3125C18.7489 5.52873 18.9364 5.79295 19.0625 6.08749C19.2028 6.38455 19.2755 6.70896 19.2755 7.03747C19.2755 7.36598 19.2028 7.69042 19.0625 7.98748L18.4 9.4875C18.3387 9.60725 18.3086 9.74052 18.3125 9.87499C18.3116 10.0092 18.3415 10.1417 18.4 10.2625ZM17.7125 12.3125L17.1 10.8625C16.9775 10.5614 16.922 10.2372 16.9375 9.91249C16.9467 9.57434 17.0276 9.242 17.175 8.93749L17.8625 7.43748C17.9503 7.1952 17.9503 6.92975 17.8625 6.68747C17.7584 6.44925 17.5656 6.26097 17.325 6.16249L15.775 5.5875C15.4545 5.47516 15.1638 5.29132 14.925 5.04997C14.6862 4.80899 14.5028 4.51896 14.3875 4.19998L13.8 2.64999C13.761 2.5269 13.6923 2.41528 13.6 2.32498C13.5115 2.2334 13.4051 2.16108 13.2875 2.1125C13.1719 2.05882 13.0461 2.03098 12.9187 2.03098C12.7914 2.03098 12.6655 2.05882 12.55 2.1125L11.05 2.79999C10.7396 2.9401 10.403 3.01254 10.0625 3.01254C9.72196 3.01254 9.38533 2.9401 9.07497 2.79999L7.575 2.1125C7.452 2.06233 7.32034 2.03681 7.1875 2.03747C7.06795 2.01253 6.94454 2.01253 6.82499 2.03747C6.58677 2.14158 6.39845 2.3344 6.29997 2.575L5.72498 4.12498C5.60313 4.42297 5.42484 4.69463 5.19997 4.925C4.96109 5.16635 4.67042 5.35015 4.34998 5.46249L2.79999 6.03748C2.66694 6.07912 2.54365 6.14714 2.43748 6.23749C2.34016 6.33605 2.25989 6.45009 2.19997 6.57497C2.11212 6.81726 2.11212 7.0827 2.19997 7.32498L2.8875 8.825C3.02761 9.13536 3.10005 9.47195 3.10005 9.81247C3.10005 10.153 3.02761 10.4896 2.8875 10.8L2.19997 12.3C2.15285 12.4158 2.12334 12.5379 2.11246 12.6625C2.11213 12.7912 2.13767 12.9188 2.1875 13.0375C2.23909 13.1535 2.31104 13.2594 2.39998 13.35C2.49568 13.4353 2.60572 13.503 2.72499 13.55L4.27498 14.1375C4.5947 14.2514 4.88506 14.4349 5.12505 14.6749C5.36503 14.9149 5.54864 15.2053 5.6625 15.525L6.23749 17.075C6.3402 17.3128 6.52716 17.5042 6.76247 17.6125C6.87922 17.6524 7.00159 17.6735 7.12498 17.675C7.25781 17.6756 7.38948 17.6502 7.51247 17.6L9.01249 16.9125C9.32285 16.7724 9.65948 16.6999 10 16.6999C10.3405 16.6999 10.6771 16.7724 10.9875 16.9125L12.4875 17.6C12.7298 17.6878 12.9952 17.6878 13.2375 17.6C13.4734 17.4903 13.6572 17.293 13.75 17.05L14.3375 15.5125C14.4498 15.192 14.6336 14.9014 14.875 14.6625C15.1106 14.4171 15.4023 14.2327 15.725 14.125L17.1875 13.5625C17.3068 13.5155 17.4168 13.4478 17.5125 13.3625C17.6014 13.2719 17.6734 13.166 17.725 13.05C17.7748 12.9313 17.8003 12.8037 17.8 12.675C17.7891 12.5505 17.7596 12.4282 17.7125 12.3125Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <p>Discounts</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-inactive-icon"
            >
              <g opacity="0.8">
                <g clip-path="url(#clip0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.69 12.2V13.43C11.6913 13.5083 11.677 13.5861 11.6479 13.6588C11.6189 13.7316 11.5756 13.7978 11.5207 13.8537C11.4658 13.9095 11.4003 13.9538 11.3281 13.9841C11.2559 14.0144 11.1783 14.03 11.1 14.03C10.9408 14.03 10.7882 13.9668 10.6757 13.8542C10.5632 13.7417 10.5 13.5891 10.5 13.43V12.2C10.5 11.7014 10.3019 11.2232 9.94931 10.8706C9.59674 10.5181 9.11857 10.32 8.61996 10.32H3.66995C3.17308 10.3226 2.69748 10.5218 2.34708 10.8741C1.99667 11.2264 1.79995 11.7031 1.79996 12.2V13.43C1.79996 13.5891 1.73676 13.7417 1.62424 13.8542C1.51172 13.9668 1.35908 14.03 1.19995 14.03C1.04082 14.03 0.888218 13.9668 0.775696 13.8542C0.663174 13.7417 0.599976 13.5891 0.599976 13.43V12.2C0.599976 11.3858 0.923409 10.6049 1.49915 10.0292C2.07488 9.45342 2.85574 9.12996 3.66995 9.12996H8.61996C9.02349 9.12864 9.42329 9.20716 9.79636 9.36098C10.1694 9.51479 10.5084 9.74086 10.7937 10.0262C11.0791 10.3115 11.3051 10.6505 11.459 11.0236C11.6128 11.3966 11.6913 11.7964 11.69 12.2Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.11993 1.70001C5.51274 1.70001 4.91919 1.88007 4.41433 2.21741C3.90948 2.55474 3.51599 3.03422 3.28363 3.59518C3.05127 4.15615 2.99046 4.77341 3.10891 5.36893C3.22737 5.96445 3.51978 6.51148 3.94912 6.94083C4.37847 7.37017 4.92547 7.66258 5.52099 7.78104C6.11651 7.89949 6.7338 7.83868 7.29477 7.60632C7.85574 7.37396 8.33521 6.98048 8.67254 6.47562C9.00988 5.97076 9.18994 5.37721 9.18994 4.77002C9.1873 3.95662 8.863 3.17728 8.28784 2.60211C7.71267 2.02695 6.93333 1.70265 6.11993 1.70001ZM6.11993 6.65002C5.7481 6.65002 5.38463 6.53977 5.07547 6.33319C4.7663 6.12661 4.52532 5.833 4.38302 5.48947C4.24073 5.14595 4.20352 4.76794 4.27606 4.40326C4.3486 4.03857 4.52766 3.70357 4.79059 3.44064C5.05351 3.17772 5.38849 2.99869 5.75317 2.92615C6.11786 2.85361 6.49586 2.89082 6.83938 3.03311C7.18291 3.1754 7.47653 3.41639 7.6831 3.72556C7.88968 4.03472 7.99994 4.39819 7.99994 4.77002C7.99994 5.26863 7.80184 5.7468 7.44928 6.09937C7.09671 6.45193 6.61854 6.65002 6.11993 6.65002Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4 12.2V13.43C15.4013 13.5083 15.387 13.5861 15.358 13.6588C15.3289 13.7316 15.2857 13.7978 15.2307 13.8537C15.1758 13.9095 15.1103 13.9538 15.0381 13.9841C14.9658 14.0144 14.8883 14.03 14.81 14.03C14.6508 14.03 14.4982 13.9668 14.3857 13.8542C14.2732 13.7417 14.21 13.5891 14.21 13.43V12.2C14.2116 11.7828 14.0737 11.377 13.8182 11.0473C13.5627 10.7175 13.2043 10.4826 12.7999 10.38C12.6463 10.34 12.5147 10.2407 12.4341 10.1038C12.3535 9.967 12.3304 9.80379 12.37 9.64998C12.3904 9.5744 12.4257 9.50363 12.4738 9.44182C12.5218 9.38001 12.5817 9.32839 12.65 9.28996C12.7395 9.23337 12.8441 9.20547 12.9499 9.20998C12.9995 9.20027 13.0504 9.20027 13.1 9.20998C13.7623 9.37977 14.3486 9.76646 14.7655 10.3084C15.1824 10.8503 15.4057 11.5163 15.4 12.2Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.93 4.78002C12.9357 5.46632 12.7113 6.13472 12.2925 6.67851C11.8738 7.22231 11.285 7.61013 10.62 7.78002C10.5447 7.80023 10.4662 7.80533 10.389 7.79503C10.3118 7.78473 10.2373 7.75921 10.17 7.71999C10.0353 7.63641 9.9385 7.50372 9.89998 7.34999C9.87977 7.27474 9.87467 7.19624 9.88497 7.119C9.89527 7.04177 9.92076 6.96734 9.95998 6.90001C10.0443 6.76608 10.1767 6.66946 10.33 6.62999C10.7333 6.52559 11.0905 6.29019 11.3454 5.96077C11.6004 5.63135 11.7388 5.2266 11.7388 4.81001C11.7388 4.39343 11.6004 3.98865 11.3454 3.65923C11.0905 3.32981 10.7333 3.09441 10.33 2.99001C10.176 2.94624 10.0439 2.84634 9.95998 2.71001C9.92023 2.64289 9.89442 2.56843 9.88411 2.49111C9.8738 2.41378 9.87921 2.33518 9.89998 2.26C9.91867 2.18428 9.95219 2.11302 9.99858 2.05034C10.045 1.98766 10.1033 1.93481 10.1703 1.89482C10.2372 1.85484 10.3115 1.82849 10.3887 1.81737C10.4658 1.80625 10.5445 1.81055 10.62 1.83C11.2767 1.99777 11.8594 2.3781 12.2772 2.91173C12.6951 3.44535 12.9246 4.10228 12.93 4.78002Z"
                    fill="white"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="14.8"
                    height="12.33"
                    fill="white"
                    transform="translate(0.599976 1.70001)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Audience</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              class="nav-inactive-icon"
            >
              <g fill="#fff" opacity="0.8">
                <path d="M12 23.25C5.85 23.25.75 18.15.75 12S5.85.75 12 .75s11.25 4.5 11.25 10.05c0 3.6-3 6.6-6.6 6.6h-2.1c-.45 0-.9.45-.9.9 0 .3.15.45.3.6.45.45.6 1.05.6 1.65 0 1.5-1.2 2.7-2.55 2.7zM12 2.4c-5.25 0-9.6 4.35-9.6 9.6s4.35 9.6 9.6 9.6c.45 0 .9-.45.9-.9 0-.3-.15-.45-.3-.6-.45-.45-.6-1.05-.6-1.65 0-1.35 1.2-2.55 2.55-2.55h2.1c2.7 0 4.95-2.25 4.95-4.95 0-4.8-4.35-8.55-9.6-8.55z"></path>
                <path d="M5.85 12.707c.911 0 1.65-.74 1.65-1.65 0-.912-.739-1.65-1.65-1.65-.911 0-1.65.738-1.65 1.65 0 .91.739 1.65 1.65 1.65zM9.15 8.207c.911 0 1.65-.74 1.65-1.65 0-.912-.739-1.65-1.65-1.65-.911 0-1.65.738-1.65 1.65 0 .91.739 1.65 1.65 1.65zM14.85 8.207c.912 0 1.65-.74 1.65-1.65 0-.912-.739-1.65-1.65-1.65-.911 0-1.65.738-1.65 1.65 0 .91.739 1.65 1.65 1.65zM18.15 12.707c.911 0 1.65-.74 1.65-1.65 0-.912-.739-1.65-1.65-1.65-.911 0-1.65.738-1.65 1.65 0 .91.739 1.65 1.65 1.65z"></path>
              </g>
            </svg>
          </div>
          <p>Appearance</p>
        </li>
        <li className="labelbar">
          <div className="submenu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              class="nav-inactive-icon"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M13.888.606c.397.172.633.586.58 1.015l-.913 7.304H21.9c.378 0 .723.22.883.562.16.342.108.747-.134 1.038l-10.5 12.6c-.277.332-.74.442-1.137.27s-.633-.586-.58-1.015l.914-7.305H3c-.378 0-.722-.218-.883-.561-.16-.343-.108-.747.134-1.038l10.5-12.6c.277-.332.74-.442 1.137-.27zm-8.806 12.52h7.368c.28 0 .546.12.731.33.185.209.271.488.237.765l-.638 5.1 7.038-8.446H12.45c-.28 0-.546-.12-.73-.33-.186-.209-.272-.488-.237-.765l.637-5.1-7.038 8.445z"
                clip-rule="evenodd"
                opacity="0.8"
              ></path>
            </svg>
          </div>
          <p>Plugins</p>
        </li>
      </ul>
    </div>
  );
}

export default SidebarElements;
