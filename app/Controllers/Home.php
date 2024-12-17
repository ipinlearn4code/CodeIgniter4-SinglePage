<?php

namespace App\Controllers;


class Home extends BaseController
{
    public function index()
    {
        // Get 'page' parameter from query string or default to 'home'
        $page = $this->request->getGet('page') ?? 'home';

        // Check if the view file exists
        $viewFile = APPPATH . "Views/pages/{$page}.php";

        if (file_exists($viewFile)) {
            // Pass the view name dynamically to the layout
            $data = [
                'title'   => ucfirst($page), // Capitalize page title
                'content' => "pages/{$page}" // Path to the view
            ];
        } else {
            // Fallback if the page does not exist
            $data = [
                'title'   => 'Error',
                'content' => 'pages/page1' // Hardcoded fallback content
            ];
        }
        return view('layouts/main', $data);
    }
}
