<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class FrontPage extends Controller
{
    public function posts()
    {
        $latest_posts = get_posts([
            'post_type' => 'Post',
            'posts_per_page'=> 3
        ]);

        return array_map(function ($post) {
            $post->post_excerpt = get_the_excerpt($post->ID);
            $post->thumbnail = get_the_post_thumbnail($post->ID, 'square');
            $post->link = get_the_permalink($post->ID);
            return $post;
        }, $latest_posts);
    }

    public function sections() {
        $sectionArray = [];
        $sectionArray[] = get_theme_mod('home_section_A');
        $sectionArray[] = get_theme_mod('home_section_B');
        $sectionArray[] = get_theme_mod('home_section_C');

        $terms = get_terms( array(
            'taxonomy' => 'section',
            'include' => $sectionArray
        ));

        return array_map(function ($term) {
            $term->icon = get_field('icon', 'section_' . $term->term_id);
            return $term;
        }, $terms);
    }
}
