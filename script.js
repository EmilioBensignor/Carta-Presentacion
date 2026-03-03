// ===================================================
//  DARK COSMOS — Script principal
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. PARTÍCULAS ───────────────────────────────
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 65;
    const LINK_DISTANCE = 130;
    const ACCENT = '99, 102, 241';
    const ACCENT2 = '6, 182, 212';

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.5 + 0.6,
        col: Math.random() > 0.5 ? ACCENT : ACCENT2,
    }));

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < LINK_DISTANCE) {
                    const alpha = (1 - dist / LINK_DISTANCE) * 0.18;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.col}, 0.55)`;
            ctx.fill();
        });

        requestAnimationFrame(drawParticles);
    }
    drawParticles();


    // ── 2. SPOTLIGHT DEL CURSOR ─────────────────────
    const spotlight = document.getElementById('spotlight');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Interpolación suave para que el spotlight "siga" con lag
    function animateSpotlight() {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        spotlight.style.left = currentX + 'px';
        spotlight.style.top = currentY + 'px';
        requestAnimationFrame(animateSpotlight);
    }
    animateSpotlight();


    // ── 3. ENTRADA DE LA CARD ────────────────────────
    const container = document.querySelector('.container');
    requestAnimationFrame(() => {
        container.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    });


    // ── 4. STAGGER DE SKILLS ─────────────────────────
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, i) => {
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
            item.classList.add('visible');
        }, 800 + i * 100);
    });


    // ── 6. STAGGER DE LISTAS ─────────────────────────
    const favItems = document.querySelectorAll('.favorite-item');
    favItems.forEach((item, i) => {
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1), border-left-color 0.25s ease, background 0.25s ease, color 0.25s ease';
            item.classList.add('visible');
        }, 1100 + i * 75);
    });


    // ── 7. CLICK EN AVATAR (pulse) ───────────────────
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('click', () => {
            profileImage.style.transform = 'scale(1.12)';
            setTimeout(() => { profileImage.style.transform = 'scale(1)'; }, 220);
        });
    }

});
