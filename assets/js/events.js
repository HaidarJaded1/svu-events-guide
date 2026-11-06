(function () {
    "use strict";
    //الوصول إلى حقول البحث والفلترة
    const searchInput = document.getElementById("event-search");
    const categoryFilter = document.getElementById("category-filter");
    const dateFilter = document.getElementById("date-filter");
    const locationFilter = document.getElementById("location-filter");
    //الحصول على جميع بطاقات الفعاليات
    const eventCards = document.querySelectorAll("#events-list > [data-event-title]");
    const noResult = document.getElementById("no-results");
    //دالة البحث والفلترة
    function filterEvents() {
        //قراءة القيم التي أدخلها المستخدم
        const searchText = searchInput.value.trim().toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedDate = dateFilter.value;
        const selectedLocation = locationFilter.value;
        //عداد الفعاليات المطابقة
        let visibleCount = 0;
        //المرور على جميع البطاقات
        eventCards.forEach(function (card) {
            //الحصول على بيانات البطاقة
            const title = card.dataset.eventTitle.toLowerCase();
            const category = card.dataset.eventCategory;
            const date = card.dataset.eventDate;
            const location = card.dataset.eventLocation;
            //التحقق من مطابقة اسم الفعالية
            const matchesSearch = title.indexOf(searchText) !== -1;
            //التحقق من مطابقة التصنيف
            const matchesCategory = selectedCategory === "" ||category === selectedCategory;
            //التحقق من مطابقة التاريخ
            const matchesDate = selectedDate === "" ||date === selectedDate;
            //التحقق من مطابقة الموقع
            const matchesLocation = selectedLocation === "" ||location === selectedLocation;
            //يجب تحقق الشروط الأربعة معاً
            if (matchesSearch && matchesCategory && matchesDate && matchesLocation) {
                card.style.display = "";
                visibleCount++;
            }
            else {card.style.display = "none";}
        });
        //إظهار الرسالة عندما لا توجد نتائج
        noResult.classList.toggle("d-none", visibleCount > 0);
    }
    //تشغيل الفلترة عند تغيير الحقول
    searchInput.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    dateFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);
    //الوصول إلى زر مسح الفلاتر
    const resetButton = document.getElementById("reset-filters");
    //إعادة تعيين جميع الحقول عند الضغط على الزر
    resetButton.addEventListener("click", function () {
        //مسح نص البحث
        searchInput.value = "";
        //إعادة التصنيف إلى جميع التصنيفات
        categoryFilter.value = "";
        //مسح التاريخ
        dateFilter.value = "";
        //إعادة الموقع إلى جميع المواقع
        locationFilter.value = "";
        //إعادة تشغيل الفلترة لإظهار جميع الفعاليات
        filterEvents();
    });
})();
