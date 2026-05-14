   // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Photo slot loading
    function loadPhotoSlot(event, slotId) {
      const slot = document.getElementById(slotId);
      const file = event.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      slot.innerHTML = `<img src="${url}" alt="Project photo" />`;
    }

    function loadPhoto(event, slotId) {
      const slot = document.getElementById(slotId);
      const file = event.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      slot.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;display:block;" alt="Profile photo" />`;
    }

    // Video file upload
    function loadVideo(event) {
      const file = event.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      const container = document.getElementById('videoContainer');
      container.innerHTML = `<video class="video-embed" controls src="${url}"></video>`;
    }

    // YouTube/Vimeo embed
    function embedVideo() {
      const raw = document.getElementById('videoUrlField').value.trim();
      if (!raw) return;
      let embedUrl = '';

      // YouTube
      const ytMatch = raw.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
      if (ytMatch) {
        embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0&rel=0`;
      }

      // Vimeo
      const vmMatch = raw.match(/vimeo\.com\/(\d+)/);
      if (vmMatch) {
        embedUrl = `https://player.vimeo.com/video/${vmMatch[1]}`;
      }

      if (embedUrl) {
        document.getElementById('videoContainer').innerHTML =
          `<iframe class="video-embed" src="${embedUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
      } else {
        alert('Paste a valid YouTube or Vimeo URL.');
      }
    }
