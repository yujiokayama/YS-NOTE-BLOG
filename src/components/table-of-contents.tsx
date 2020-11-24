import React, { useEffect } from "react";

type Props = {};

const TableOfContents = ({}: Props) => {
  const createTableOfContents = () => {
    const toc = document.querySelector(".post");
    const headlines = document.querySelectorAll(
      "#TABLE_OF_CONTENTS h2, #TABLE_OF_CONTENTS h3"
    );
    const h2 = document.querySelectorAll("#TABLE_OF_CONTENTS h2");
    const h3 = document.querySelectorAll("#TABLE_OF_CONTENTS h3");

    for (let i = 0; i < headlines.length; i++) {
      // h2
      if (headlines[i].tagName === "H2") {
        for (let i = 0; i < h2.length; i++) {
          const id = `${h2[i].nodeName}-${[i + 1]}`;
          h2[i].id = id;
        }
        const ul = document.createElement("ol");
        const li = document.createElement("li");
        const a: any = document.createElement("a");
        ul.classList.add("toc-list-h2");
        a.innerHTML = headlines[i].textContent;
        a.href = "#" + headlines[i].id;
        li.appendChild(a);
        ul.appendChild(li);
        toc?.appendChild(ul);
      }
      // h3
      if (headlines[i].tagName === "H3") {
        for (let i = 0; i < h3.length; i++) {
          const id = `${h3[i].nodeName}-${[i + 1]}`;
          h3[i].id = id;
        }
        const ul = document.createElement("ol");
        const li = document.createElement("li");
        const a: any = document.createElement("a");
        const lastUl = toc?.lastElementChild;
        const lastLi = lastUl?.lastElementChild;
        ul.classList.add("toc-list-h3");
        a.innerHTML = headlines[i].textContent;
        a.href = "#" + headlines[i].id;
        li.appendChild(a);
        ul.appendChild(li);
        lastLi?.appendChild(ul);
      }
    }
  };

  useEffect(() => {
    createTableOfContents();
  }, []);

  return (
    <>
      <div id="TABLE_OF_CONTENTS"></div>
    </>
  );
};

export default TableOfContents;
