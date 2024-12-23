// about modal
$(".about_modal").click(function(){
  $(".about").fadeIn();
});
$(".btn_close").click(function(){
  $(".about").fadeOut();
});

/* document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = {
    s2: document.getElementById("s2"),
    s3: document.getElementById("s3"),
    s4: document.getElementById("s4"),
    s5: document.getElementById("s5"),
  };
  const menuItems = document.querySelectorAll(".gnb li");
  const sectionMapping = {
    s2: { activeColor: "#000", inactiveColor: "#999" },
    s3: { activeColor: "#fff", inactiveColor: "#999" },
    s4: { activeColor: "#000", inactiveColor: "#999" },
    s5: { activeColor: "#fff", inactiveColor: "#999" },
  };

  function updateStyles() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let activeSectionId = null;

    Object.entries(sections).forEach(([id, section]) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = id;
      }
    });

    if (activeSectionId) {
      if (activeSectionId === "s2" || activeSectionId === "s4") {
        header.classList.add("new-header");
      } else {
        header.classList.remove("new-header");
      }

      menuItems.forEach((li, index) => {
        const targetSection = `s${index + 2}`;
        li.style.color =
          targetSection === activeSectionId
            ? sectionMapping[activeSectionId]?.activeColor || "#000"
            : sectionMapping[activeSectionId]?.inactiveColor || "#999";
      });
    } else {
      header.classList.remove("new-header");
      menuItems.forEach((li) => (li.style.color = ""));
    }
  }

  window.addEventListener("scroll", updateStyles);
  updateStyles();

  // #s2 슬라이더
  const sliderWrap = document.querySelector(".s2_contents");
  const sliderInner = sliderWrap.querySelector(".s2_content");
  const slider = sliderWrap.querySelectorAll(".slide");
  const sliderBtn = sliderWrap.querySelectorAll(".s2_btn a");
  const titleIndicators = document.querySelectorAll(".title_head1 li");

  let currentIndex = 0;
  const sliderCount = slider.length;

  function initSlider() {
    slider.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
    updateTitle(currentIndex);
  }

  function gotoSlider(num) {
    slider.forEach((item, index) => {
      item.style.display = index === num ? "flex" : "none";
    });
    currentIndex = num;
    updateTitle(currentIndex);
  }

  function updateTitle(index) {
    titleIndicators.forEach((li, liIndex) => {
      const title = li.querySelector(".title");
      if (title) title.remove();
      if (liIndex === index) {
        const titleText = slider[index].querySelector(".pj_row1 h2").textContent;
        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = ` ${titleText}`;
        li.appendChild(titleElement);
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("prev")) {
        const prevIndex = (currentIndex - 1 + sliderCount) % sliderCount;
        gotoSlider(prevIndex);
      } else {
        const nextIndex = (currentIndex + 1) % sliderCount;
        gotoSlider(nextIndex);
      }
    });
  });

  titleIndicators.forEach((li, index) => {
    li.addEventListener("click", () => {
      gotoSlider(index);
    });
  });

  initSlider();

  // #s3 슬라이더 및 info 동작 코드
  const designButtons = document.querySelectorAll(".design_btn button");
  const designParts = document.querySelectorAll(".design_contents");
  const prevButton = document.querySelector(".nav .prev");
  const nextButton = document.querySelector(".nav .next");
  let activeContent = designParts[0];
  let currentSlideIndex = 0;

  function updateDesignInfo(content) {
    const slides = content.querySelectorAll(".design_item");
    slides.forEach((slide, index) => {
      const info = slide.querySelector(".design_info");
      if (index === currentSlideIndex) {
        slide.classList.add("active");
        info.style.display = "block";
      } else {
        slide.classList.remove("active");
        info.style.display = "none";
      }
    });
  }

  function moveSlide(direction) {
    const slides = activeContent.querySelectorAll(".design_item");
    const totalSlides = slides.length;
    currentSlideIndex =
      direction === "next"
        ? (currentSlideIndex + 1) % totalSlides
        : (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateDesignInfo(activeContent);
  }

  designButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      designButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      designParts.forEach((part, partIndex) => {
        if (index === partIndex) {
          part.classList.add("active");
          part.style.display = "block";
          activeContent = part;
          currentSlideIndex = 0;
          updateDesignInfo(part);
        } else {
          part.classList.remove("active");
          part.style.display = "none";
        }
      });
    });
  });

  prevButton.addEventListener("click", () => moveSlide("prev"));
  nextButton.addEventListener("click", () => moveSlide("next"));

  designButtons[0].click();
}); */



/* document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = {
    s2: document.getElementById("s2"),
    s3: document.getElementById("s3"),
    s4: document.getElementById("s4"),
    s5: document.getElementById("s5"),
  };
  const menuItems = document.querySelectorAll(".gnb li"); // 네비게이션 li 요소들
  const sectionMapping = {
    s2: { activeColor: "#000", inactiveColor: "#999" },
    s3: { activeColor: "#fff", inactiveColor: "#999" },
    s4: { activeColor: "#000", inactiveColor: "#999" },
    s5: { activeColor: "#fff", inactiveColor: "#999" },
  };

  function updateStyles() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // 화면 중간 기준
    let activeSectionId = null;

    // 현재 활성 섹션 탐지
    Object.entries(sections).forEach(([id, section]) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = id;
      }
    });

    // 헤더 스타일 및 메뉴 색상 업데이트
    if (activeSectionId) {
      if (activeSectionId === "s2" || activeSectionId === "s4") {
        header.classList.add("new-header");
      } else {
        header.classList.remove("new-header");
      }

      menuItems.forEach((li, index) => {
        const targetSection = `s${index + 2}`;
        if (targetSection === activeSectionId) {
          li.style.color = sectionMapping[activeSectionId]?.activeColor || "#000";
        } else {
          li.style.color = sectionMapping[activeSectionId]?.inactiveColor || "#999";
        }
      });
    } else {
      // 기본 상태 (s1)에서는 헤더 및 메뉴 색상 초기화
      header.classList.remove("new-header");
      menuItems.forEach((li) => (li.style.color = ""));
    }
  }

  // 스크롤 이벤트 추가
  window.addEventListener("scroll", updateStyles);

  // 초기 스타일 설정
  updateStyles();

  // 기존 슬라이더 및 디자인 관련 코드 유지
  const sliderWrap = document.querySelector(".s2_contents");
  const sliderInner = sliderWrap.querySelector(".s2_content");
  const slider = sliderWrap.querySelectorAll(".slide");
  const sliderBtn = sliderWrap.querySelectorAll(".s2_btn a");
  const titleIndicators = document.querySelectorAll(".title_head1 li");

  let currentIndex = 0;
  const sliderCount = slider.length;

  function initSlider() {
    slider.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
    updateTitle(currentIndex);
  }

  function gotoSlider(num) {
    slider.forEach((item, index) => {
      item.style.display = index === num ? "flex" : "none";
    });
    currentIndex = num;
    updateTitle(currentIndex);
  }

  function updateTitle(index) {
    titleIndicators.forEach((li, liIndex) => {
      const title = li.querySelector(".title");
      if (title) title.remove();
      if (liIndex === index) {
        const titleText = slider[index].querySelector(".pj_row1 h2").textContent;
        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = ` ${titleText}`;
        li.appendChild(titleElement);
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("prev")) {
        const prevIndex = (currentIndex - 1 + sliderCount) % sliderCount;
        gotoSlider(prevIndex);
      } else {
        const nextIndex = (currentIndex + 1) % sliderCount;
        gotoSlider(nextIndex);
      }
    });
  });

  titleIndicators.forEach((li, index) => {
    li.addEventListener("click", () => {
      gotoSlider(index);
    });
  });

  initSlider();

  const designButtons = document.querySelectorAll(".design_btn button");
  const designParts = document.querySelectorAll(".design_contents");

  designButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      designButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      designParts.forEach((part, partIndex) => {
        part.style.display = partIndex === index ? "block" : "none";
      });
    });
  });

  designButtons[0].classList.add("active");
  designParts.forEach((part, index) => {
    part.style.display = index === 0 ? "block" : "none";
  });

  const sliderContainer = document.querySelector(".design_contents.active");
  const prevButton = document.querySelector(".nav .prev");
  const nextButton = document.querySelector(".nav .next");

  function moveForward() {
    const firstItem = sliderContainer.firstElementChild;
    sliderContainer.appendChild(firstItem);
  }

  prevButton.addEventListener("click", moveForward);
  nextButton.addEventListener("click", moveForward);
}); */

/* document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = {
    s2: document.getElementById("s2"),
    s3: document.getElementById("s3"),
    s4: document.getElementById("s4"),
    s5: document.getElementById("s5"),
  };
  const menuItems = document.querySelectorAll(".gnb li");
  const sectionMapping = {
    s2: { activeColor: "#000", inactiveColor: "#999" },
    s3: { activeColor: "#fff", inactiveColor: "#999" },
    s4: { activeColor: "#000", inactiveColor: "#999" },
    s5: { activeColor: "#fff", inactiveColor: "#999" },
  };

  function updateStyles() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let activeSectionId = null;

    Object.entries(sections).forEach(([id, section]) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = id;
      }
    });

    if (activeSectionId) {
      if (activeSectionId === "s2" || activeSectionId === "s4") {
        header.classList.add("new-header");
      } else {
        header.classList.remove("new-header");
      }

      menuItems.forEach((li, index) => {
        const targetSection = `s${index + 2}`;
        li.style.color =
          targetSection === activeSectionId
            ? sectionMapping[activeSectionId]?.activeColor || "#000"
            : sectionMapping[activeSectionId]?.inactiveColor || "#999";
      });
    } else {
      header.classList.remove("new-header");
      menuItems.forEach((li) => (li.style.color = ""));
    }
  }

  window.addEventListener("scroll", updateStyles);
  updateStyles();

  // #s2 슬라이더 관련 코드 복원
  const sliderWrap = document.querySelector(".s2_contents");
  const sliderInner = sliderWrap.querySelector(".s2_content");
  const slider = sliderWrap.querySelectorAll(".slide");
  const sliderBtn = sliderWrap.querySelectorAll(".s2_btn a");
  const titleIndicators = document.querySelectorAll(".title_head1 li");

  let currentIndex = 0;
  const sliderCount = slider.length;

  function initSlider() {
    slider.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
    updateTitle(currentIndex);
  }

  function gotoSlider(num) {
    slider.forEach((item, index) => {
      item.style.display = index === num ? "flex" : "none";
    });
    currentIndex = num;
    updateTitle(currentIndex);
  }

  function updateTitle(index) {
    titleIndicators.forEach((li, liIndex) => {
      const title = li.querySelector(".title");
      if (title) title.remove();
      if (liIndex === index) {
        const titleText = slider[index].querySelector(".pj_row1 h2").textContent;
        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = ` ${titleText}`;
        li.appendChild(titleElement);
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("prev")) {
        const prevIndex = (currentIndex - 1 + sliderCount) % sliderCount;
        gotoSlider(prevIndex);
      } else {
        const nextIndex = (currentIndex + 1) % sliderCount;
        gotoSlider(nextIndex);
      }
    });
  });

  titleIndicators.forEach((li, index) => {
    li.addEventListener("click", () => {
      gotoSlider(index);
    });
  });

  initSlider();

  // #s3 슬라이더 및 버튼 동작 코드
  const designButtons = document.querySelectorAll(".design_btn button");
  const designParts = document.querySelectorAll(".design_contents");
  let activeContent = designParts[0];
  let currentSlideIndex = 0;

  function updateDesignInfo(content) {
    const slides = content.querySelectorAll(".design_item");
    slides.forEach((slide, index) => {
      const info = slide.querySelector(".design_info");
      if (index === currentSlideIndex) {
        slide.classList.add("active");
        info.style.display = "block";
      } else {
        slide.classList.remove("active");
        info.style.display = "none";
      }
    });
  }

  function moveSlide(direction) {
    const slides = activeContent.querySelectorAll(".design_item");
    const totalSlides = slides.length;
    currentSlideIndex =
      direction === "next"
        ? (currentSlideIndex + 1) % totalSlides
        : (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateDesignInfo(activeContent);
  }

  designButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      designButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      designParts.forEach((part, partIndex) => {
        if (index === partIndex) {
          part.classList.add("active");
          part.style.display = "block";
          activeContent = part;
          currentSlideIndex = 0;
          updateDesignInfo(part);
        } else {
          part.classList.remove("active");
          part.style.display = "none";
        }
      });
    });
  });

  const prevButton = document.querySelector(".nav .prev");
  const nextButton = document.querySelector(".nav .next");

  prevButton.addEventListener("click", () => moveSlide("prev"));
  nextButton.addEventListener("click", () => moveSlide("next"));

  designButtons[0].click();
});

 */

/* document.addEventListener("DOMContentLoaded", () => {
  // Header update on scroll
  const header = document.querySelector("header");
  const sections = {
    s2: document.getElementById("s2"),
    s3: document.getElementById("s3"),
    s4: document.getElementById("s4"),
    s5: document.getElementById("s5"),
  };
  const menuItems = document.querySelectorAll(".gnb li");
  const sectionMapping = {
    s2: { activeColor: "#000", inactiveColor: "#999" },
    s3: { activeColor: "#fff", inactiveColor: "#999" },
    s4: { activeColor: "#000", inactiveColor: "#999" },
    s5: { activeColor: "#fff", inactiveColor: "#999" },
  };

  function updateStyles() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let activeSectionId = null;

    Object.entries(sections).forEach(([id, section]) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = id;
      }
    });

    if (activeSectionId) {
      if (activeSectionId === "s2" || activeSectionId === "s4") {
        header.classList.add("new-header");
      } else {
        header.classList.remove("new-header");
      }

      menuItems.forEach((li, index) => {
        const targetSection = `s${index + 2}`;
        li.style.color =
          targetSection === activeSectionId
            ? sectionMapping[activeSectionId]?.activeColor || "#000"
            : sectionMapping[activeSectionId]?.inactiveColor || "#999";
      });
    } else {
      header.classList.remove("new-header");
      menuItems.forEach((li) => (li.style.color = ""));
    }
  }

  window.addEventListener("scroll", updateStyles);
  updateStyles();

  // Hover effect for #s4
  const s4Items = document.querySelectorAll("#s4 .list .inner");

  s4Items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      s4Items.forEach((el) => {
        el.style.flex = "0.05";
        el.style.height = "50%";
      });
      item.style.flex = "1";
      item.style.height = "100%";
    });

    item.addEventListener("mouseleave", () => {
      s4Items.forEach((el) => {
        el.style.flex = "0.05";
        el.style.height = "50%";
      });
    });
  });

  // #s2 slider logic
  const sliderWrap = document.querySelector(".s2_contents");
  const slider = sliderWrap.querySelectorAll(".slide");
  const sliderBtn = sliderWrap.querySelectorAll(".s2_btn a");
  const titleIndicators = document.querySelectorAll(".title_head1 li");

  let currentIndex = 0;
  const sliderCount = slider.length;

  function initSlider() {
    slider.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
    updateTitle(currentIndex);
  }

  function gotoSlider(num) {
    slider.forEach((item, index) => {
      item.style.display = index === num ? "flex" : "none";
    });
    currentIndex = num;
    updateTitle(currentIndex);
  }

  function updateTitle(index) {
    titleIndicators.forEach((li, liIndex) => {
      const title = li.querySelector(".title");
      if (title) title.remove();
      if (liIndex === index) {
        const titleText = slider[index].querySelector(".pj_row1 h2").textContent;
        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = ` ${titleText}`;
        li.appendChild(titleElement);
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("prev")) {
        const prevIndex = (currentIndex - 1 + sliderCount) % sliderCount;
        gotoSlider(prevIndex);
      } else {
        const nextIndex = (currentIndex + 1) % sliderCount;
        gotoSlider(nextIndex);
      }
    });
  });

  titleIndicators.forEach((li, index) => {
    li.addEventListener("click", () => {
      gotoSlider(index);
    });
  });

  initSlider();

  // #s3 slider and info logic
  const designButtons = document.querySelectorAll(".design_btn button");
  const designParts = document.querySelectorAll(".design-list > div"); // 모든 파트를 선택하도록 수정

  // 버튼 클릭 이벤트 추가
  designButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // 모든 버튼의 활성화 상태 제거
      designButtons.forEach((btn) => btn.classList.remove("active"));
      // 클릭된 버튼 활성화
      button.classList.add("active");

      // 모든 파트를 숨김 처리, 선택된 파트만 표시
      designParts.forEach((part, partIndex) => {
        part.classList.toggle("active", partIndex === index);
      });
    });
  });

  // 초기 상태 설정
  designButtons[0].classList.add("active");
  designParts.forEach((part, index) => {
    part.classList.toggle("active", index === 0);
  });

  let holder = document.querySelector('.design-list'),
    wrapper = document.querySelector('.design-con-inner'),
    designContent= document.querySelector('.contents.design-con'),
    overflowY, mapPositionY

  function onResize(e) {
    overflowY = holder.offsetHeight - (window.innerHeight/1.2);
    mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2);
  }

  function onMouseMove(e) {
    if (overflowY > 0) {
      let x = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0;
      gsap.to(holder, {duration: 1, overwrite: true, ease: "power3", x: mapPositionY(y)});
    }
  }

  window.addEventListener("resize", onResize);
  designContent.addEventListener("mousemove", onMouseMove);
  designContent.addEventListener("touchmove", onMouseMove);
  designContent.addEventListener("pointermove", onMouseMove);
  onResize()
}); */


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = Array.from(document.querySelectorAll("section"));
  const menuItems = document.querySelectorAll(".gnb li a"); // a 태그로 수정
  const sectionMapping = {
    s1: { activeColor: "#fff", inactiveColor: "#fff" },
    s2: { activeColor: "#000", inactiveColor: "#999" },
    s3: { activeColor: "#fff", inactiveColor: "#999" },
    s4: { activeColor: "#000", inactiveColor: "#999" },
    s5: { activeColor: "#fff", inactiveColor: "#999" },
  };

  let currentSectionIndex = 0;
  let isScrolling = false;

  /** 스크롤 이동 */
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      const targetPosition = sections[index].offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateStyles();
        isScrolling = false;
      }, 1000); // 애니메이션 시간
    }
  }

  /** 헤더 및 메뉴 스타일 업데이트 */
  function updateStyles() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let activeSectionId = null;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSectionId = section.id;
        currentSectionIndex = index;
      }
    });

    if (activeSectionId) {
      header.classList.toggle("new-header", activeSectionId === "s2" || activeSectionId === "s4");

      menuItems.forEach((li) => {
        const targetSection = li.getAttribute("href").replace("#", ""); // href에서 ID 가져오기
        li.style.color =
          targetSection === activeSectionId
            ? sectionMapping[activeSectionId]?.activeColor || "#000"
            : sectionMapping[activeSectionId]?.inactiveColor || "#999";
      });
    }
  }

  /** 휠 이벤트 처리 */
  function onWheel(e) {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }
    scrollToSection(currentSectionIndex);
  }

  /** 터치 스와이프 처리 */
  let touchStartY = 0;
  function onTouchStart(e) {
    touchStartY = e.changedTouches[0].clientY;
  }

  function onTouchEnd(e) {
    const touchEndY = e.changedTouches[0].clientY;
    if (isScrolling) return;

    if (touchStartY - touchEndY > 50) {
      currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else if (touchEndY - touchStartY > 50) {
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }
    scrollToSection(currentSectionIndex);
  }

  /** 헤더 내비게이션 클릭 이벤트 */
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.getAttribute("href").replace("#", ""); // 클릭한 a 태그의 href 속성에서 ID 가져오기
      const targetIndex = sections.findIndex((section) => section.id === targetId); // ID로 섹션 인덱스 찾기

      if (targetIndex !== -1) {
        scrollToSection(targetIndex);
      }
    });
  });

  /** Hover effect for #s4 */
  const s4Items = document.querySelectorAll("#s4 .list .inner");
  s4Items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      s4Items.forEach((el) => {
        el.style.flex = "0.05";
        el.style.height = "50%";
      });
      item.style.flex = "1";
      item.style.height = "100%";
    });

    item.addEventListener("mouseleave", () => {
      s4Items.forEach((el) => {
        el.style.flex = "0.05";
        el.style.height = "50%";
      });
    });
  });

  /** #s2 슬라이더 */
  const sliderWrap = document.querySelector(".s2_contents");
  const slider = sliderWrap.querySelectorAll(".slide");
  const sliderBtn = sliderWrap.querySelectorAll(".s2_btn a");
  const titleIndicators = document.querySelectorAll(".title_head1 li");

  let currentIndex = 0;
  const sliderCount = slider.length;

  function initSlider() {
    slider.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
    updateTitle(currentIndex);
  }

  function gotoSlider(num) {
    slider.forEach((item, index) => {
      item.style.display = index === num ? "flex" : "none";
    });
    currentIndex = num;
    updateTitle(currentIndex);
  }

  function updateTitle(index) {
    titleIndicators.forEach((li, liIndex) => {
      const title = li.querySelector(".title");
      if (title) title.remove();
      if (liIndex === index) {
        const titleText = slider[index].querySelector(".pj_row1 h2").textContent;
        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = ` ${titleText}`;
        li.appendChild(titleElement);
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  sliderBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("prev")) {
        const prevIndex = (currentIndex - 1 + sliderCount) % sliderCount;
        gotoSlider(prevIndex);
      } else {
        const nextIndex = (currentIndex + 1) % sliderCount;
        gotoSlider(nextIndex);
      }
    });
  });

  titleIndicators.forEach((li, index) => {
    li.addEventListener("click", () => {
      gotoSlider(index);
    });
  });

  initSlider();

  /** #s3 디자인 슬라이더 */
  const designButtons = document.querySelectorAll(".design_btn button");
  const designParts = document.querySelectorAll(".design-list > div");

  designButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      designButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      designParts.forEach((part, partIndex) => {
        part.classList.toggle("active", partIndex === index);
      });
    });
  });

  designButtons[0].classList.add("active");
  designParts.forEach((part, index) => {
    part.classList.toggle("active", index === 0);
  });

  // 초기화
  window.addEventListener("wheel", onWheel);
  window.addEventListener("touchstart", onTouchStart);
  window.addEventListener("touchend", onTouchEnd);
  scrollToSection(currentSectionIndex);

  // 애니메이션
  // section1
  const infoDivs = document.querySelectorAll(".info div");

  function showInfo() {
    setTimeout(() => {
      infoDivs.forEach((div, index) => {
        setTimeout(() => {
          div.classList.add("show");
        }, index * 500); // 0.5초 간격으로 실행
      });
    }, 2000); // 2초 후 실행
  }

  // #s1 화면이 로드되었을 때 실행
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showInfo();
          observer.disconnect(); // 한번 실행 후 옵저버 해제
        }
      });
    },
    { threshold: 0.5 } // #s1이 50% 보일 때 트리거
  );

  const s1Section = document.getElementById("s1");
  observer.observe(s1Section);

  const sectionS5 = document.querySelector("#s5");
  const s5Header1 = document.querySelector("#s5 h2:nth-of-type(1)");
  const s5Header2 = document.querySelector("#s5 h2:nth-of-type(2)");
  const s5Ul = document.querySelector("#s5 ul");
  
  // 초기 상태 설정
  function resetS5Animation() {
    s5Header1.style.transform = "translateX(-100px)";
    s5Header1.style.opacity = "0";
    s5Header2.style.transform = "translateX(100px)";
    s5Header2.style.opacity = "0";
    s5Ul.style.opacity = "0";
  }
  
  // 애니메이션 실행 함수
  function animateS5() {
    setTimeout(() => {
      s5Header1.style.transform = "translateX(0)";
      s5Header1.style.opacity = "1";
    }, 500); // 첫 번째 h2 등장
  
    setTimeout(() => {
      s5Header2.style.transform = "translateX(0)";
      s5Header2.style.opacity = "0.5";
    }, 1500); // 두 번째 h2 등장
  
    setTimeout(() => {
      s5Ul.style.opacity = "1";
    }, 2500); // ul 등장
  }
  
  // IntersectionObserver로 애니메이션 트리거
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateS5();
          obs.disconnect(); // 한 번 실행 후 해제
        }
      });
    },
    {
      threshold: 0.5, // 섹션의 50%가 뷰포트에 들어오면 트리거
    }
  );
  
  // 초기 상태로 재설정 및 옵저버 실행
  resetS5Animation();
  obs.observe(sectionS5);
  
  // 화면 리로드 시에도 초기화
  window.addEventListener("beforeunload", resetS5Animation);
});


$(document).ready(function () {
  // 모바일 팝업 열기
  $('.mobile').on('click', function (e) {
    e.preventDefault(); // 기본 동작 방지
    $('.pop').fadeIn(); // .pop 나타내기
    $('body').css('overflow', 'hidden'); // 배경 스크롤 비활성화
  });

  // 태블릿 팝업 열기
  $('.tablet').on('click', function (e) {
    e.preventDefault(); // 기본 동작 방지
    $('.pop').fadeIn(); // .pop 나타내기
    $('body').css('overflow', 'hidden'); // 배경 스크롤 비활성화
  });

  // 팝업 닫기
  $('.pop .close').on('click', function (e) {
    e.preventDefault(); // 기본 동작 방지
    $('.pop').fadeOut(); // .pop 숨기기
    $('body').css('overflow', 'auto'); // 배경 스크롤 활성화
  });
});