(function () {
  "use strict";

  // العناوين والتواريخ والتصنيفات والصور معتمدة في docs/events.md.
  // لم يُحدد وقت البداية بعد؛ ملف التقويم يحفظ التاريخ كتذكير طوال اليوم.
  const events = [
    {
      id: "web", title: "ورشة تصميم أول موقع ويب", category: "تقنية", date: "2026-11-02",
      location: "عبر الإنترنت", image: "web.svg",
      summary: "خطوتك الأولى في HTML وCSS، مع تطبيق عملي بسيط يناسب المبتدئين.",
      description: [
        "مساحة تعليمية لطلاب الجامعة الراغبين في التعرف إلى بناء صفحات الويب. نبدأ بفكرة الصفحة وهيكلها، ثم نربط بين المحتوى المكتوب بلغة HTML وتنسيقه باستخدام CSS.",
        "تستند فكرة الورشة إلى تطبيق صغير يساعد المبتدئ على فهم العناوين والفقرات والصور والروابط، وكيفية جمعها في صفحة قابلة للتصفح. يمكنك مراجعة المفاهيم وطرح أسئلتك ومشاركة ما تعلمته مع زملائك."
      ],
      highlights: ["التعرف إلى بنية صفحة HTML والعناصر الأساسية.", "فهم دور CSS في الألوان والخطوط وترتيب المحتوى.", "تجربة تطبيق عملي بسيط ومناقشة الأسئلة."]
    },
    {
      id: "books", title: "نادي القراءة: كتاب وقهوة", category: "ثقافة", date: "2026-11-04",
      location: "عبر الإنترنت", image: "books.svg",
      summary: "نلتقي لنتبادل الأفكار والانطباعات حول كتاب الشهر في جلسة حوار مفتوحة.",
      description: [
        "لقاء ثقافي يجمع الطلاب الذين يحبون القراءة ومشاركة الأفكار. تركز الجلسة على الانطباعات والأسئلة التي تتركها القراءة، وتتيح سماع وجهات نظر مختلفة في أجواء ودية.",
        "يمكن للمشارك تقديم فكرة لفتت انتباهه أو سؤال يرغب في مناقشته، ثم الاستماع إلى تجارب زملائه. الهدف هو تشجيع عادة القراءة وبناء حوار يحترم اختلاف الآراء، بعيداً عن التقييم الدراسي."
      ],
      highlights: ["مشاركة انطباعات وأسئلة حول القراءة.", "الاستماع إلى وجهات نظر وتجارب متنوعة.", "تبادل اقتراحات لقراءات قادمة."]
    },
    {
      id: "sport", title: "تحدّي الحركة لطلاب الجامعة", category: "رياضة", date: "2026-11-06",
      location: "مشاركة عن بُعد", image: "sport.svg",
      summary: "استراحة من الدراسة ونشاط رياضي خفيف؛ شارك بتحدّيك اليومي مع زملائك.",
      description: [
        "مبادرة لتشجيع الطلاب على تخصيص استراحة للحركة خلال يومهم الدراسي. المشاركة عن بُعد، ويمكن لكل طالب اختيار نشاط خفيف يتناسب مع وقته وقدرته ومكانه.",
        "تقوم الفكرة على التشجيع وتبادل التجارب، وليس المنافسة على مستوى رياضي محدد. شارك زملاءك كيف أضفت الحركة إلى يومك، واستفد من أفكارهم لتنظيم فترات الاستراحة بين جلسات الدراسة."
      ],
      highlights: ["تخصيص استراحة للحركة خلال اليوم الدراسي.", "اختيار نشاط خفيف يناسب المشارك.", "مشاركة التجربة وتشجيع الزملاء عن بُعد."]
    },
    {
      id: "music", title: "أمسية مواهب موسيقية", category: "موسيقى", date: "2026-11-07",
      location: "عبر الإنترنت", image: "music.svg",
      summary: "مساحة لمشاركة المواهب والاستماع إلى مقطوعات يقدمها طلاب الجامعة.",
      description: [
        "لقاء فني يتيح للطلاب التعرف إلى المواهب الموسيقية في المجتمع الجامعي. تجمع الأمسية بين الاستماع ومشاركة الاهتمامات الفنية في أجواء تشجع الإبداع والتعبير.",
        "يمكن للمشاركين الاستمتاع بالمقطوعات ومناقشة ما يحبونه في الموسيقى وتقديم تعليقات مشجعة لزملائهم. الفعالية مساحة للتواصل وتقدير تنوع الأذواق والمواهب."
      ],
      highlights: ["الاستماع إلى مواهب ومقطوعات طلابية.", "مشاركة الاهتمامات الموسيقية.", "تشجيع الإبداع والتواصل بين الطلاب."]
    },
    {
      id: "family", title: "لقاء الألعاب العائلية", category: "عائلي", date: "2026-11-08",
      location: "عبر الإنترنت", image: "family.svg",
      summary: "أسئلة وألعاب جماعية خفيفة تجمع الطلاب وأفراد عائلاتهم في لقاء ممتع.",
      description: [
        "لقاء اجتماعي يركز على المتعة والعمل الجماعي، ويجمع الطلاب وأفراد عائلاتهم حول أسئلة وألعاب خفيفة يمكن المشاركة فيها عن بُعد.",
        "تهدف الفعالية إلى إيجاد وقت للتواصل خارج المحاضرات، مع أنشطة تتيح التعاون وتبادل الأفكار. المشاركة بروح ودية، والاهتمام بالتجربة المشتركة أكثر من النتائج."
      ],
      highlights: ["المشاركة في أسئلة وألعاب جماعية خفيفة.", "التعاون وتبادل الأفكار بروح ودية.", "قضاء وقت اجتماعي مع الطلاب وأفراد العائلة."]
    },
    {
      id: "study", title: "جلسة تبادل خبرات الدراسة", category: "ثقافة", date: "2026-11-10",
      location: "عبر الإنترنت", image: "books.svg",
      summary: "نتشارك طرق تنظيم الوقت والمراجعة والتحضير للامتحانات مع زملاء من تخصصات مختلفة.",
      description: [
        "جلسة حوارية يشارك فيها الطلاب تجاربهم مع الدراسة وتنظيم الوقت. تركز على تبادل الأساليب التي تساعد على توزيع المهام والمراجعة والاستعداد للامتحانات.",
        "تختلف العادات الدراسية من طالب إلى آخر، لذلك تتيح الجلسة الاستماع إلى أفكار من تخصصات وتجارب متنوعة. يمكنك مشاركة ما يناسبك، ومناقشة التحديات، واختيار الأفكار التي يمكن تجربتها في خطتك الدراسية."
      ],
      highlights: ["تبادل أساليب تنظيم الوقت والمهام.", "مناقشة أفكار للمراجعة والتحضير للامتحانات.", "التعرف إلى تجارب زملاء من تخصصات مختلفة."]
    }
  ];

  const id = new URLSearchParams(window.location.search).get("id") ?? "web";
  const event = events.find(function (item) { return item.id === id; });
  const byId = function (name) { return document.getElementById(name); };

  if (!event) {
    byId("event-title").textContent = "الفعالية غير موجودة";
    byId("event-summary").textContent = "اختر فعالية متاحة من الدليل.";
    byId("event-not-found").hidden = false;
    document.title = "الفعالية غير موجودة | دليل فعاليات الجامعة";
    return;
  }

  const dateFormatter = new Intl.DateTimeFormat("ar-SY", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
  });
  function formatDate(date) {
    return dateFormatter.format(new Date(date + "T00:00:00Z"));
  }
  const shareUrl = new URL("event.html", window.location.href);
  shareUrl.searchParams.set("id", event.id);
  const status = byId("event-action-status");

  document.title = event.title + " | دليل فعاليات الجامعة";
  document.querySelector('meta[name="description"]').content = event.summary;
  byId("event-title").textContent = event.title;
  byId("event-summary").textContent = event.summary;
  byId("event-category").textContent = event.category;
  byId("event-category").hidden = false;
  byId("event-image").src = "assets/img/" + event.image;
  byId("event-image").alt = "رسم توضيحي: " + event.title;
  byId("event-date").dateTime = event.date;
  byId("event-date").textContent = formatDate(event.date);
  byId("event-location").textContent = event.location;
  byId("booking-event-name").textContent = event.title;
  byId("event-share-link").value = shareUrl.href;

  event.description.forEach(function (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    byId("event-description").appendChild(paragraph);
  });
  event.highlights.forEach(function (text) {
    const item = document.createElement("li");
    item.className = "mb-2";
    item.textContent = text;
    byId("event-highlights").appendChild(item);
  });

  const galleryImages = [event.image, "campus.svg", event.image === "books.svg" ? "web.svg" : "books.svg"];
  galleryImages.forEach(function (image, index) {
    const figure = document.createElement("figure");
    figure.className = "col-6 col-md-4 mb-0";
    const picture = document.createElement("img");
    picture.className = "event-gallery-image";
    picture.src = "assets/img/" + image;
    picture.alt = ["رسم توضيحي لموضوع الفعالية", "رسم توضيحي للتواصل بين الطلاب", "رسم توضيحي للتعلم وتبادل الأفكار"][index];
    picture.width = 640;
    picture.height = 480;
    picture.loading = "lazy";
    figure.appendChild(picture);
    byId("event-gallery").appendChild(figure);
  });

  const related = events.filter(function (item) { return item.id !== event.id; });
  related.sort(function (first, second) {
    const categoryOrder = Number(second.category === event.category) - Number(first.category === event.category);
    return categoryOrder || Math.abs(Date.parse(first.date) - Date.parse(event.date)) - Math.abs(Date.parse(second.date) - Date.parse(event.date));
  });
  related.slice(0, 3).forEach(function (item) {
    const fragment = byId("related-event-template").content.cloneNode(true);
    const image = fragment.querySelector("img");
    image.src = "assets/img/" + item.image;
    image.alt = "رسم توضيحي: " + item.title;
    fragment.querySelector(".badge").textContent = item.category;
    fragment.querySelector("h3").textContent = item.title;
    fragment.querySelector(".event-meta").textContent = formatDate(item.date) + " · " + item.location;
    fragment.querySelector(".card-text").textContent = item.summary;
    fragment.querySelector("a").href = "event.html?id=" + item.id;
    byId("related-events").appendChild(fragment);
  });

  function escapeCalendarText(text) {
    return text.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
  }
  // طي الأسطر وفق iCalendar دون تقسيم أحرف UTF-8 العربية.
  function foldCalendarLine(text) {
    const encoder = new TextEncoder();
    const lines = [];
    let line = "";
    let bytes = 0;
    for (const character of text) {
      const length = encoder.encode(character).length;
      if (bytes + length > 75) {
        lines.push(line);
        line = " ";
        bytes = 1;
      }
      line += character;
      bytes += length;
    }
    lines.push(line);
    return lines.join("\r\n");
  }
  const nextDay = new Date(event.date + "T00:00:00Z");
  nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  const calendar = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SVU Events Guide//AR", "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT", "UID:svu-event-" + event.id + "-" + event.date + "@svu-events-guide",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"),
    "DTSTART;VALUE=DATE:" + event.date.replace(/-/g, ""),
    "DTEND;VALUE=DATE:" + nextDay.toISOString().slice(0, 10).replace(/-/g, ""),
    "SUMMARY:" + escapeCalendarText(event.title),
    "DESCRIPTION:" + escapeCalendarText(event.summary + "\nسيُعلن وقت الفعالية لاحقاً. هذا تذكير بالتاريخ فقط.\n" + shareUrl.href),
    "LOCATION:" + escapeCalendarText(event.location), "URL:" + shareUrl.href,
    "TRANSP:TRANSPARENT", "END:VEVENT", "END:VCALENDAR"
  ].map(foldCalendarLine).join("\r\n") + "\r\n";
  const calendarUrl = URL.createObjectURL(new Blob([calendar], { type: "text/calendar;charset=utf-8" }));
  const calendarLink = byId("add-to-calendar");
  calendarLink.href = calendarUrl;
  calendarLink.download = "svu-event-" + event.id + ".ics";
  calendarLink.addEventListener("click", function () {
    status.textContent = "افتح ملف التقويم الذي تم تنزيله لإضافة تذكير بتاريخ الفعالية؛ الوقت سيُعلن لاحقاً.";
  });
  window.addEventListener("pagehide", function (pageEvent) {
    if (!pageEvent.persisted) URL.revokeObjectURL(calendarUrl);
  });

  byId("share-event").addEventListener("click", async function () {
    status.textContent = "";
    byId("share-fallback").hidden = true;
    if (navigator.share && window.isSecureContext) {
      try {
        await navigator.share({ title: event.title, text: event.summary, url: shareUrl.href });
        status.textContent = "تم فتح خيارات مشاركة الفعالية.";
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(shareUrl.href);
      status.textContent = "تم نسخ رابط الفعالية. يمكنك مشاركته مع زملائك.";
    } catch (error) {
      byId("share-fallback").hidden = false;
      byId("event-share-link").focus();
      byId("event-share-link").select();
      status.textContent = "انسخ الرابط الظاهر لمشاركة الفعالية.";
    }
  });

  const bookingForm = byId("booking-form");
  const bookingName = byId("booking-name");
  const bookingEmail = byId("booking-email");
  const bookingFeedback = byId("booking-feedback");
  function resetBooking() {
    bookingForm.reset();
    bookingForm.classList.remove("was-validated");
    bookingForm.hidden = false;
    bookingName.setCustomValidity("");
    bookingName.removeAttribute("aria-invalid");
    bookingEmail.removeAttribute("aria-invalid");
    bookingFeedback.className = "";
    bookingFeedback.textContent = "";
  }
  byId("booking-modal").addEventListener("show.bs.modal", resetBooking);
  byId("booking-modal").addEventListener("hidden.bs.modal", resetBooking);
  byId("booking-modal").addEventListener("shown.bs.modal", function () { bookingName.focus(); });
  bookingName.addEventListener("input", function () { bookingName.setCustomValidity(""); });
  bookingForm.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();
    bookingName.value = bookingName.value.trim();
    bookingEmail.value = bookingEmail.value.trim();
    bookingName.setCustomValidity(bookingName.value.length >= 2 && bookingName.value.length <= 60 ? "" : "أدخل اسماً من حرفين إلى ٦٠ حرفاً.");
    bookingForm.classList.add("was-validated");
    bookingName.setAttribute("aria-invalid", String(!bookingName.checkValidity()));
    bookingEmail.setAttribute("aria-invalid", String(!bookingEmail.checkValidity()));
    if (!bookingForm.checkValidity()) {
      bookingFeedback.className = "alert alert-danger";
      bookingFeedback.textContent = "أدخل اسماً صحيحاً وبريداً إلكترونياً بصيغة صحيحة لإكمال التجربة.";
      (bookingName.checkValidity() ? bookingEmail : bookingName).focus();
      return;
    }
    bookingFeedback.className = "alert alert-success";
    bookingFeedback.textContent = "اكتمل الحجز التجريبي، " + bookingName.value + ". لم يُحجز مقعد فعلي ولم تُرسل بياناتك.";
    bookingForm.hidden = true;
    bookingFeedback.tabIndex = -1;
    bookingFeedback.focus();
  });

  byId("event-details").hidden = false;
})();
