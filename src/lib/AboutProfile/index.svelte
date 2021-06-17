<script lang="ts">
</script>

<div class="profile-panel">
	<a class="header-link" href="/">Ethan Olsen</a>
	<p>
		I am a full-stack web developer proficient in React and Typescript to build stable and
		performant web and mobile applications.
	</p>

	<div class="page-links">
		<a href="/"><span class="bullet">⥰</span> <span class="text">Home</span></a>
		<a href="/about"><span class="bullet">⥰</span> <span class="text">About </span></a>
	</div>

	<div class="social-links">
		<a class="social" href="#">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				width="60%"
				height="60%"
				viewBox="0 0 24 24"
				><path
					d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
				/></svg
			>
		</a>
		<a class="social" href="#">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				width="60%"
				height="60%"
				viewBox="0 0 24 24"
				><path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
				/></svg
			>
		</a>
		<a class="social" href="#">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				width="60%"
				height="60%"
				viewBox="0 0 24 24"
				><path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
				/></svg
			>
		</a>
	</div>
</div>

<style>
	.profile-panel {
		background-color: var(--tertiary-color);
		width: 350px;
		min-height: 100vh;
		height: 100%;
		padding: 2rem;
		padding-top: 28px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		position: sticky;
		top: 0;
	}
	.page-links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	a {
		text-decoration: none;
	}
	.page-links a .bullet {
		margin-right: 0;
		transition: margin 300ms ease;
	}
	.page-links a:hover .bullet {
		margin-right: 0.25rem;
	}
	.social-links {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
	}
	.social {
		color: var(--tertiary-color);
		background-color: var(--accent-color);
		opacity: 0.6;
		border-radius: 9999px;
		box-shadow: 0 0 2px #00000020;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2.25rem;
		width: 2.25rem;
		transition: opacity 300ms ease;
	}
	.social:hover {
		opacity: 1;
	}
	.header-link {
		font-size: 1.15rem;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
	}
	p {
		margin: 0;
		opacity: 0.9;
	}
</style>
