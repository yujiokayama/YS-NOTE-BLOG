import React, { useEffect } from "react";

type Props = {
  selector: string;
};

const TableOfContents = ({ selector }: Props) => {
  const createTableOfContents = () => {
    const target = `.${selector}`;
    const toc: HTMLDivElement | null = document.querySelector(".toc");
    const headlines = document.querySelectorAll(`${target} h2, ${target} h3`);
    const h2 = document.querySelectorAll(`${target} h2`);
    const h3 = document.querySelectorAll(`${target} h3`);
    for (let i = 0; i < headlines.length; i++) {
      if (headlines[i].tagName === "H2") {
        for (let i = 0; i < h2.length; i++) {
          const id = `${h2[i].nodeName}-${[i + 1]}`;
          h2[i].id = id;
        }
        const ul: HTMLUListElement = document.createElement("ol");
        const li: HTMLLIElement = document.createElement("li");
        const a: HTMLAnchorElement = document.createElement("a");
        ul.classList.add("toc-list-h2");
        a.textContent = headlines[i].textContent;
        a.href = "#" + headlines[i].id;
        li.appendChild(a);
        ul.appendChild(li);
        toc?.appendChild(ul);
      }
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
      <h2 className="toc-title">Table Of Contents</h2>
      <div className="toc"></div>
    </>
  );
};

export default TableOfContents;
