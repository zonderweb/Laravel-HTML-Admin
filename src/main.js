import "./styles/admin.scss"
import "bootstrap";

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Перевіряємо стан збережений у LocalStorage при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
	const isCollapsed =
		localStorage.getItem('sidebar-collapsed') === 'true';
	if (isCollapsed) {
		sidebar.classList.add('collapsed');
		mainContent.classList.add('collapsed');
	}

	// Знімаємо клас "preload" після застосування стану
	document.body.classList.remove('preload');
});

// Додаємо/знімаємо клас при кліку і зберігаємо стан у LocalStorage
toggleSidebar.addEventListener('click', () => {
	sidebar.classList.toggle('collapsed');
	mainContent.classList.toggle('collapsed');
	localStorage.setItem(
		'sidebar-collapsed',
		sidebar.classList.contains('collapsed')
	);
});

