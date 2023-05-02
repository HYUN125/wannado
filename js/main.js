AOS.init({
        once: false,
        disable: function () {
            let m_width = 650;
            return window.innerWidth < m_width;
          }
}); 