package com.detective_comics.detective_comics.models;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "comics")
@EqualsAndHashCode(of = "id")
public class Comics implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private Date date_of_publication;

    @Column(nullable = false)
    private String url_image;
}
